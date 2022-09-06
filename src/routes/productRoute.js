import express from "express";
import { getProduct, createProduct, updateProduct, deleteProduct } from "../controller/Product.js";
import { verifyToken } from "../controller/authentication/verifyToken.js";

const router = express.Router();

router.get('/api/product', verifyToken, getProduct);
router.post('/api/product', verifyToken, createProduct);
router.patch('/api/product/:id', verifyToken,updateProduct);
router.delete('/api/product/:id', verifyToken, deleteProduct);

export default router;