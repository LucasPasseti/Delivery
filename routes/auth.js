import express from 'express';

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Hola novo ponto");
})

router.get("/register", (req,res) => {
    res.send("Hola registro ponto");
})

export default router;