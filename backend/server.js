import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/connectdb.js";

const app = express();

//database connection
connectDb();


app.get("/",(req,res)=>{
    res.send("heyyyyyy");
})
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port ",process.env.PORT);   
})
