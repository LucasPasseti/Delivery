import express from 'express';
import Service from '../models/Service.js';
import { createService, deleteService, getAllservice, getService, updateService } from '../controllers/service.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createService);

//UPDATE
router.put("/:id", verifyAdmin, updateService);

//DELETE
router.delete("/:id", verifyAdmin, deleteService);

//GET
router.get("/:id", getService);

//GET ALL
router.get("/", getAllservice);


export default router;