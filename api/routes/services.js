import express from 'express';
import Service from '../models/Service.js';
import { countByCity, countByType, createService, deleteService, getAllservice, getService, updateService } from '../controllers/service.js';
import { verifyAdmin, verifyEstablishment, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createService);

//UPDATE
router.put("/:id", verifyAdmin, updateService);

//DELETE
router.delete("/:id", verifyAdmin, deleteService);

//GET
router.get("/find/:id", getService);

//GET ALL

router.get("/", getAllservice);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);


export default router;