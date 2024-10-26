import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/login", AuthController.loginController);

export default authRouter;
