import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

//CREATE
router.post("/", async (req,res) => {

    const newService = new Service(req.body);

    try{
        const savedService = await newService.save();
        res.status(200).json(savedService);
    }catch(err) {
        res.status(500).json(err);
    } 
})
//UPDATE
//DELETE
//GET
//GET ALL


export default router;