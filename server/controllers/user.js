const Users = require("../Model/Users");
const jwt=require('jsonwebtoken');
const bcrypt = require("bcrypt")
/*create jwt token for user*/

const createToken=(user)=>{
    return jwt.sign({user},"who is the power man in the world",{
        expiresIn:'1s'
    })
}
const createUser=async(req,res)=>{
    try{
    const {firstName,lastName,email,phoneNumber,password,isAdmin}=req.body;
    const hashedPassword= await bcrypt.hash(password,10);

    const user=new Users({
        firstName,
        lastName,
        email,
        phoneNumber,
        password:hashedPassword,
        isAdmin
    });

    const emailCheck=await Users.findOne({email:email});
    if(emailCheck){
        res.status(422).json({error: "DuplicateEmail",message:"Please enater uniqe email address.This email already exists"})
    }else{
        const saveUser=await user.save();
        if(saveUser){
            res.status(200).json({message:"user created successfuly"})
        }else{
            res.status(400).json({message:"can not create a user"})
        }
    }
  

    }catch(error){
      console.log("500 server error")
       res.status(500).json({message:error.message});
    }
};

const userLogin=async(req,res)=>{
    const {email,password}=req.body;
    try{

    const user=await Users.findOne({email});
    if(user){
    const auth=await bcrypt.compare(password,user.password);
    if(auth){
     const token=createToken(user);
     res.status(200).json({message:"You logged in successfuly",token})
    }else{
        res.status(401).json({message:"your password is incorrect.Please try to remember"})
    }
  }else{
    res.status(404).json({message:"you are not registerd.Please Register"})
  }
}catch(error){
res.status(500).json({message:"500 server error"});
}

};


const getUser=async(req,res)=>{
    try{
    const findUsers=await Users.find();
    if(findUsers){
        res.status(201).json({message:"users found successfuly", findUsers})
    }else{
        res.status(404).json({message:"users not found"});
    }
}catch(error){
    res.status(500).json({message:"500 server error" + error});
}
}

const getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const findUser = await Users.findById(userId);
  
      if (findUser) {
        const user = {
          id: findUser.id,
          firstName: findUser.firstName,
          lastName: findUser.lastName,
          email: findUser.email,
          password: findUser.password,
          phoneNumber:findUser.phoneNumber
        };
        res.status(200).json({ message: "User found", user});
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

const updateUser=async(req,res)=>{
    try{
   const userId=req.params.id;
   const {password,...userUpdate}=req.body;
   const hashedPassword= await bcrypt.hash(password,10);
   const updateUser=await Users.findByIdAndUpdate(userId,{password:hashedPassword, ...userUpdate},{new:true});

   if(updateUser){
    res.status(201).json({message:"user updated successfuly"})
   }else{
    res.status(401).json({message:"user not found by Id"})
   }
    }catch(e){
     res.status(500).json({message:'user can not update',e});
    }
}
module.exports={createUser,userLogin,getUser,updateUser,getUserById }