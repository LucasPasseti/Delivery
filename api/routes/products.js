import express from 'express';
import Product from '../models/Product.js';
import { createProduct, deleteProduct, getAllproduct, getProduct, updateProduct } from '../controllers/service.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createProduct);

//UPDATE
router.put("/:id", verifyAdmin, updateProduct);

//DELETE
router.delete("/:id", verifyAdmin, deleteProduct);

//GET
router.get("/:id", getProduct);

//GET ALL
router.get("/", getAllproduct);


export default router;