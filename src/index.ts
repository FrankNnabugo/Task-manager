import app from "./app";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import Dbconnect from "./Config/database";


const startServer = async():Promise<void>=>{
    try{
   await Dbconnect();
        app.listen(process.env.port, ()=>{
              console.log("server is running on port", PORT);
        });
    }
    catch(err){
        console.error("error connecting to database:", err);
    }
}
 startServer();

