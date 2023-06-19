// motoboyRoutes.js
import express from 'express';
import Motoboy from '../models/Motoboy.js';
import { createMotoboy, deleteMotoboy, getAllMotoboys, getMotoboy, updateMotoboy } from '../controllers/motoboy.js';
import { verifyAdmin, verifyMotoboy } from '../utils/verifyToken.js';

const verifyAdminOrMotoboy = (req, res, next) => {
  verifyAdmin(req, res, (err) => {
    if (err) {
      verifyMotoboy(req, res, next);
    } else {
      next();
    }
  });
};

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createMotoboy);

// UPDATE
router.put('/:id', verifyAdminOrMotoboy, updateMotoboy);

// DELETE
router.delete('/:id', verifyAdmin, deleteMotoboy);

// GET
router.get('/find/:id', verifyAdminOrMotoboy, getMotoboy);

// GET ALL
router.get('/', verifyAdmin, getAllMotoboys);

export default router;