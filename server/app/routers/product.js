import express from "express";
import { createProduct, getProducts, getProductDetail, getRelatedProduct } from '../controllers/productController.js'

const router = express.Router();

router.get('/product/list', getProducts)
router.get('/product/:id', getProductDetail)
router.get('/related-product', getRelatedProduct)

router.post("/product/create", createProduct)
const productRoute = router;

export default productRoute;