import express,{Request, Response, NextFunction} from "express";
import {errorHandler} from "./middleware/errorHandler";
import { TaskRouter } from "./Routes/Task.Route";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials:true
}));
app.use(helmet());
app.use(compression());
app.use((req:Request, res:Response, next:NextFunction)=>{
    console.log(req.path, req.method);
    next();
});
app.use(errorHandler);


app.use("/api/task", TaskRouter);








export default app;
