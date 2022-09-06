import express from "express";
import { register } from "../controller/register.js";
const router = express.Router();

router.post('/api/register', register);

export default router;
