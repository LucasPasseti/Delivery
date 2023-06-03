import express from 'express';
import Product from '../models/Product.js';
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from '../controllers/product.js';
import { verifyAdmin, verifyEstablishment, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/:productid", verifyAdmin || verifyEstablishment, createProduct);

//UPDATE
// router.put("/availability/:id", updateProductAvailability);
router.put("/:id", verifyAdmin || verifyEstablishment, updateProduct);

//DELETE
router.delete("/:id/:productid", verifyAdmin || verifyEstablishment, deleteProduct);

//GET
router.get("/:id", getProduct);

//GET ALL
router.get("/", getAllProduct);


export default router;