
import{Request, Response} from "express";
import asyncHandler from "express-async-handler";
import{schemaValidation} from "../Utils/Schema.validation";
import {taskService} from "../service/task.service";


export class TaskController{

    postTask = asyncHandler(async(req:Request, res:Response) =>{
    const taskData = {
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        assignTo: req.body.assignTo
    }
    const{error, value} = schemaValidation.validate(taskData);
    if(error){
        res.status(400).send(error.message)
    }
    else{
const newTask = await taskService.createTask(value);
    res.status(200).send(newTask);
    }
    });


    findAllTask = asyncHandler(async(req:Request, res:Response)=>{
        const allTask = await taskService.getAllTask();
           res.send(allTask)
    });



findATask = asyncHandler(async(req:Request, res:Response)=>{
    const id = req.params.id;
    const get = await taskService.getATask(id);
    res.send(get);
});


removeTask = asyncHandler(async(req:Request, res:Response)=>{
    const id = req.params.id;
    const deleteTask = await taskService.deleteTask(id);
    res.send("Task deleted");
});



updateTask = asyncHandler(async(req:Request, res:Response)=>{
    const id = req.params;
    const update = await taskService.updateTask(id, req.body);
    res.send(update);   
})

 }


 export const taskController = new TaskController();