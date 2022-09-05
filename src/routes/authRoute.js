import express from "express";
import { Auth } from "../controller/authentication/authentication.js";
import { register } from "../controller/Register.js";

const router = express.Router();

router.post('/api/login', Auth);
router.post('/api/register', register);

export default router;
