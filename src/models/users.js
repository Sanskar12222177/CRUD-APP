import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },

})

export const user = mongoose.model('Users', usersSchema);

// git add .
// git commit -m "Users details"
// git push