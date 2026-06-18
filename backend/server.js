import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/connectdb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(cors({
origin:"http://localhost:5173",
credentials:true
}))

app.use(express.json());
app.use(cookieParser());


//database connection
connectDb();


app.use('/api/auth',authRouter)

const Port = process.env.PORT || 3000

app.listen(Port,()=>{
    console.log("Server is running on port ",process.env.PORT);   
})
