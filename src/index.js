// require('dotenv').config({path: "./env"});
import dotenv from "dotenv"
import  express from "express";
import connectDB from "./db/index.js";

const app = express();

connectDB();
dotenv.config({path: './env'});





















/*
 
1st approach : use iffi
But better approach is the one which we have used

( async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

       app.on("error",(error)=>{
        console.log("Error : ",error);
        throw error;
       });
       
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port : ${process.env.PORT} `);
       })


        
    } catch (error) {
        console.log("ERROR : ",error);
    }
})()

*/