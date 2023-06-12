import express from 'express';
import Product from '../models/Product.js';
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct, updateProductAvailability } from '../controllers/product.js';
import { verifyAdmin, verifyEstablishment, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Middleware de verificação combinada para administração ou estabelecimento
const verifyAdminOrEstablishment = (req, res, next) => {
    verifyAdmin(req, res, (err) => {
      if (err) {
        verifyEstablishment(req, res, next);
      } else {
        next();
      }
    });
  };


//CREATE
router.post("/:serviceid", verifyAdminOrEstablishment , createProduct);

//UPDATE
// router.put("/availability/:id", updateProductAvailability);
router.put("/:id", verifyAdminOrEstablishment , updateProduct);
router.put("/availability/:id", updateProductAvailability);

//DELETE
router.delete("/:id/:serviceid", verifyAdminOrEstablishment, deleteProduct);

//GET
router.get("/:id", getProduct);

//GET ALL
router.get("/", getAllProduct);


export default router;