const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
 firstName:{
    type:String
 },
 lastName:{
    type:String
 },
email:{
    type:String,
    required:true
 },

 phoneNumber:{
  type:String,
  
 },
 password:{
    type:String,
    required:true
 },

 isAdmin:{
   type:Boolean
 },
})

const Users=mongoose.model("users",UserSchema);
module.exports=Users;