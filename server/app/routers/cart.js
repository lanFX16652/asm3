import express from "express";
import { addProductIntoCart } from "../controllers/cartController.js";

// Khởi tạo router
const router = express.Router();

// Thêm các api cho routes handler
// for client page
router.post("/client/add-to-cart", addProductIntoCart);
const cartRoute = router;

export default cartRoute;