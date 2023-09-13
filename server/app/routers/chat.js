import express from "express";
import chatController from "../controllers/chatController.js";

const router = express.Router();

router.get('/chat/list', chatController.getListChat.bind(chatController))

router.post('/chat/create-room', chatController.createRoom)

const chatRoute = router;

export default chatRoute;