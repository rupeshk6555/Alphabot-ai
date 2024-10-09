import { Router } from "express";
import {
  createuserChats,
  getuserChats,
  getChats,
  updateChats,
  deleteChat,
  getAllChats,
} from "../controllers/userchat.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = Router();

// Routes

router.post("/chats", ClerkExpressRequireAuth(), createuserChats);
router.get("/userChats", ClerkExpressRequireAuth(), getuserChats);
router.get("/chats/:id", ClerkExpressRequireAuth(), getChats);
router.put("/chats/:id", ClerkExpressRequireAuth(), updateChats);
// routes/chatRoutes.js
router.delete("/chats/:id", ClerkExpressRequireAuth(), deleteChat);

export default router;
