import express from "express";
import { signup, login, logout, dashBoardLogin } from "../controllers/authController.js";

// Khởi tạo router
const router = express.Router();

// Thêm các api cho routes handler
// for client page
router.post("/client/signup", signup);
router.post("/client/login", login);
router.post('/logout', logout)

//for admin page
router.post("/admin/login", dashBoardLogin)

const authenticateRoute = router;

export default authenticateRoute;