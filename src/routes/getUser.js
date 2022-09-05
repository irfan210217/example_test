import express from "express";
import { getData } from "../controller/User.js";
import { verifyToken } from "../controller/authentication/verifyToken.js";

const router = express.Router();

router.get('/api/admin/user', getData);

export default router;