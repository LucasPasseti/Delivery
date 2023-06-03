import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"; 
import usersRoute from "./routes/users.js"; 
import servicesRoute from "./routes/services.js"; 
import motoboysRoute from "./routes/motoboys.js"; 
import productsRoute from "./routes/products.js"; 
import cookieParser from "cookie-parser";

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

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/services", servicesRoute);
app.use("/products", productsRoute);
app.use("/motoboys", motoboysRoute);

app.use((err, req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Algo está errado !";
    return res.status(500).json({
        sucess:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,
    })
});

// requisicao 
app.listen(8800, () => {
    connect()
    console.log('Connectado no BackEnd http://localhost:8800/');
})