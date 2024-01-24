import express from "express";
import {
    getMasuk,
    getMasukById,
    createMasuk,
    updateMasuk,
    deleteMasuk
} from "../controllers/masukControllers.js";

const router = express.Router();

router.get('/Masuk', getMasuk);
router.get('/Masuk/:id', getMasukById);
router.post('/Masuk', createMasuk);
router.patch('/Masuk/:id', updateMasuk);
router.delete('/Masuk/:id', deleteMasuk);

export default router;