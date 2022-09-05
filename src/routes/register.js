import express from "express";
import { register } from "../controller/register.js";
import { verifyToken } from "../controller/authentication/verifyToken.js";

const router = express.Router();

router.post('/api/register', register);

export default router;
