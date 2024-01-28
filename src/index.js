import dotenv from "dotenv"
dotenv.config({path: './env'});
import connectDB from "./db/index.js";
import app from "./app.js";

connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("Error : ",error);
    })
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Server started at port : ${process.env.PORT}`);
    });

}).catch((error)=> console.log("Mongodb connection failed !!",error));

























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