import express from "express";
import { signup, login, logout } from "../controllers/authController.js";

// Khởi tạo router
const router = express.Router();

// Thêm các api cho routes handler
// for client page
router.post("/client/signup", signup);
router.post("/client/login", login);
router.post('/client/logout', logout)
const authenticateRoute = router;

export default authenticateRoute;