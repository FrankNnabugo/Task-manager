import {Task} from "../model/Task.model";


export class TaskService{

    async createTask(taskData:any){
        try{
            const task = await Task.create(taskData);
            return task
        }
        catch(err){
            console.error("error occured", err)
        }
    }


    async getAllTask(){
        try{
        const findTask = await Task.find({})
        return findTask
        }
        catch(err){
            console.error("error occured", err)
        }
    }



    async getATask(id: any){
        try{
        const getTask = await Task.findOne(id)
        return getTask
        }
        catch(err){
            console.error("error", err)
        }
    }
    


    async deleteTask(id:any){
        try{
        const deleteATask = await Task.deleteOne(id)
        }
        catch(err){
            console.error("error", err)
        }

    }



    async updateTask(id: any, taskData:any){
        try{
        const update = await Task.updateOne(id, taskData)
        return update
        }
        catch(err){
            console.error("error", err)
        }
    
    }

}

export const taskService = new TaskService();