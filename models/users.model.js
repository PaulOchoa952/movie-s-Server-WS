const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {type:String,require:true},
    email: {type:String,require:true,unique:true},
    password: {type:String,require:true},
    createdAt: {type:Date,default:Date.now},
    
});

const User=mongoose.model('User',userSchema,'users');

module.exports=User;

