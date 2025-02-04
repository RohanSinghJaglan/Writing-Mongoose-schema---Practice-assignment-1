const mongoose = require('mongoose');

const profilefield = new mongoose.Schema({
    firstName:{
        type:String,  
    },
    lastName:{
        type: String,  
    },
    age:{
        type: Number,   
    }
});

const userfield = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type: [String],
    },
    profile:{
        type: profilefield
    },
    lastLogin:{
        type:Date,
        default:null
    }
});

const User= mongoose.model('User', userfield);
module.exports= User;