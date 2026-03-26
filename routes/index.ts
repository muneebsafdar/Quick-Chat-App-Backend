import { Router } from "express";
import { Login } from "../controllers/authControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createChatGroup, getAllChatGroup, getOneChatGroup ,deleteOneChatGroup} from "../controllers/chatGroupController.js";
const router = Router();

router.post("/auth/login", Login);
router.post("/create-group",authMiddleware,createChatGroup)
router.get("/find-all-groups",authMiddleware,getAllChatGroup)
router.get("/find-one-group",getOneChatGroup)
router.delete("/delete-one-group",authMiddleware,deleteOneChatGroup)

export default router;  