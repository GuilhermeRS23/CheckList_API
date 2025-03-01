import GruposService from "../services/gruposService.js";

class GruposController {

    criarGrupo = async (req, res) => {
        try {
            const { nome } = req.body;

            // Criar novo grupo
            const grupo = await GruposService.criarGrupo({ nome });

            return res.status(201).json(grupo);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    buscarTodosGrupos = async (req, res) => {
        try {
            const grupos = await GruposService.buscarTodosGrupos();
            if (grupos.length === 0) {
                res.json({ message: "Nenhum grupo encontrado!" })
            }
            return res.status(200).json(grupos);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    criarSubGrupo = async (req, res) => {
        try {
            const { nome, grupoId } = req.body;

            // Criar novo subgrupo referenciando o grupo
            const subGrupo = await GruposService.criarSubGrupo({ nome, grupo: grupoId });

            return res.status(201).json(subGrupo);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    buscarTodosSubGrupos = async (req, res) => {
        try {
            const subGrupos = await GruposService.buscarTodosSubGrupos();
            if (subGrupos.length === 0) {
                res.json({ message: "Nenhum SubGrupo encontrado!" })
            }
            return res.status(200).json(subGrupos);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };

    buscarSubGruposPorGrupo = async (req, res) => {
        try {
            const { grupoId } = req.params;
            const subGrupos = await GruposService.buscarPorGrupo(grupoId);

            return res.status(200).json(subGrupos);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};

export default new GruposController();
