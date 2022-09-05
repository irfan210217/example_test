import express from "express";
import { getProduct, createProduct, updateProduct, deleteProduct } from "../controller/Product.js";
import { verifyToken } from "../controller/authentication/verifyToken.js";

const router = express.Router();

router.get('/api/product', getProduct);
router.post('/api/product', createProduct);
router.patch('/api/product/:id', updateProduct);
router.delete('/api/product/:id', deleteProduct);

export default router;