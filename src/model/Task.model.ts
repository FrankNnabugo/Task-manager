import{model, Schema}from "mongoose";

interface Itask{
    title : string 
    startDate: string
    endDate: string 
    assignTo: string
}

const taskSchema = new Schema<Itask>({

    title:{
        type:String,
        required: true

    },

    startDate:{
        type: String,
        required: true,
    },

    endDate:{
        type:String,
        required: true
    },

    assignTo:{
        type: String,
        required: true,
    }
}, {timestamps: true});


export const Task = model<Itask>("Task", taskSchema);