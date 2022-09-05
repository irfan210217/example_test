import express from "express";
import { getData, createData, updateData, deleteData } from "../controller/Karyawan.js";

const router = express.Router();

router.get('/api/v5/karyawan', getData);
router.post('/api/v5/karyawan', createData);
router.patch('/api/v5/karyawan', updateData);
router.delete('/api/v5/karyawan', deleteData);

export default router;