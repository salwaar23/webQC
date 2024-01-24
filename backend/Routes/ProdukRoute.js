import express from "express";
import {
    getProduk,
    getProdukById,
    createProduk,
    updateProduk,
    deleteProduk
} from "../controllers/produkControllers.js";

const router = express.Router();

router.get('/Produk', getProduk);
router.get('/Produk/:id',  getProdukById);
router.post('/Produk', createProduk);
router.patch('/Produk/:id', updateProduk);
router.delete('/Produk/:id', deleteProduk);

export default router;