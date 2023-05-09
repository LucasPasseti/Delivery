import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

// conexao com o mongo
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO); //integrando o .env para conexao do mongo
        console.log("Conectei no MongoDB");
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB desconectado");
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB conectado");
})

// requisicao 
app.listen(8800, () => {
    connect()
    console.log('Connectado no BackEnd http://localhost:8800/');
})