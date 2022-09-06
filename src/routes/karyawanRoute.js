import express from "express";
import { getData, createData, updateData, deleteData } from "../controller/Karyawan.js";
import { verifyToken } from "../controller/authentication/verifyToken.js";

const router = express.Router();

router.get('/api/v5/karyawan', verifyToken, getData);
router.post('/api/v5/karyawan', verifyToken, createData);
router.patch('/api/v5/karyawan', verifyToken, updateData);
router.delete('/api/v5/karyawan',verifyToken, deleteData);

export default router;