import { Router } from "express";
import { Login } from "../controllers/authControllers.js";

const router = Router();

router.post("/auth/login", Login);

export default router;  