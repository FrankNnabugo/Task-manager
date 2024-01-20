import express from "express";
import{createTask, 
    getAllTask, 
    getATask, 
    deleteATask,
     updateTask} from "../controllers/Task.controllers";

     export const TaskRouter = express.Router();


     TaskRouter.post("/createTask", createTask);
     TaskRouter.get("/getAllTask", getAllTask);
     TaskRouter.get("/getATask/:id", getATask);
     TaskRouter.put("/updateTask/:id" , updateTask);
     TaskRouter.delete("/deleteATask/:id" , deleteATask);

