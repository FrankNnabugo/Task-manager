import{Task} from "../model/Task.model";
import{Request, Response} from "express";
import asyncHandler from "express-async-handler";
import{schemaValidation} from "../Utils/Schema.validation";




export const createTask = asyncHandler(async(req:Request, res:Response)=>{
    const data = {
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        assignTo: req.body.assignTo
    }
    const{error, value} = schemaValidation.validate(data);
    if(error){
        res.status(400).send(error.message)
    }
    else{
const newTask = await Task.create(data);
    res.status(200).send(newTask);
    }
});



export const getAllTask = asyncHandler(async(req:Request, res:Response)=>{
    const page:any = req.query.page || 0;
    const perPage: number = 5;
    const getAllTask = await Task.find({})
    .sort({createdAt: -1})
    .skip(page*perPage)
    .limit(perPage);
    res.send(getAllTask);
});



export const getATask = asyncHandler(async(req:Request, res:Response)=>{
    const{id}=req.params;
    const get = await Task.findOne({_id:id});
    res.send(get);

})


export const deleteATask = asyncHandler(async(req:Request, res:Response)=>{
    const{id} = req.params;
    const deleteTask = await Task.deleteOne({_id:id});
    res.send("Task deleted");
});




export const updateTask = asyncHandler(async(req:Request, res:Response)=>{
    const{id} = req.params;
    const update = await Task.updateOne({_id:id}, req.body);
    res.send(update);   
});
