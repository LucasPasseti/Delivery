import express from 'express';
import {updateUser, deleteUser, getUser, getAllUser} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{              //utilizei tais rotas apenas para criar os tokens de autenticacao
//    res.send("Olá usuário, você está autenticado")
//  })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//    res.send("Olá usuário, você está logado e pode deletar sua conta quando quiser");
//  })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//    res.send("Olá admin, você está logado e pode deletar todas as contas");
//  })

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser,getUser);

//GET ALL
router.get("/", verifyAdmin, getAllUser);

export default router;