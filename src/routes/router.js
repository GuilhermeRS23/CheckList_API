import { Router } from "express";
import testRouter from "./testes.router.js";

const router = Router();

router.use("/test", testRouter);

export default router;
