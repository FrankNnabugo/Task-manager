import express from "express";
import{taskController} from "../controllers/Task.controllers";

     export const TaskRouter = express.Router();


     TaskRouter.post("/createTask", taskController.postTask);
     TaskRouter.get("/getAllTask", taskController.findAllTask);
     TaskRouter.get("/getATask/:id", taskController.findATask);
     TaskRouter.put("/updateTask/:id" , taskController.removeTask);
     TaskRouter.delete("/deleteATask/:id" ,taskController.updateTask);

