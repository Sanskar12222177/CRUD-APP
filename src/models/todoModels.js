import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
},{
        timestamps : true
    
})

export const Todo = mongoose.model('Todo', todoSchema);