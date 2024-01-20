import mongoose from "mongoose";
import{Request , Response} from "express";
import dotenv from "dotenv";
dotenv.config();


 const Dbconnect = (async():Promise<void>=>{
    const connection: any = process.env.MONGO_URL;
    try{
await mongoose.connect(connection, {
    connectTimeoutMS: 200000,
    socketTimeoutMS:200000
});
console.log("database connecton established");
    }  
   catch(err){
    console.error("error connecting to database:", err)
   }
    
});

export default Dbconnect;

