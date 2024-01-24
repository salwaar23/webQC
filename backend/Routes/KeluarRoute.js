import express from "express";
import {
    getKeluar,
    getKeluarById,
    createKeluar,
    updateKeluar,
    deleteKeluar
} from "../controllers/keluarControllers.js";

const router = express.Router();

router.get('/Keluar', getKeluar);
router.get('/Keluar/:id',  getKeluarById);
router.post('/Keluar', createKeluar);
router.patch('/Keluar/:id', updateKeluar);
router.delete('/Keluar/:id', deleteKeluar);

export default router;