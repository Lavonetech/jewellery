const Orders = require("../Model/Orders");

const createOrder=async(req,res)=>{
    try{
      const {metal,stone,size,userName,product,category,message} =req.body;

     const order=new Orders({
       product,
        metal,
        stone,
        size,
        userName,
        category,
        message
     })
      const saveOrder=await order.save();
      if(saveOrder){
      res.status(201).json({message:"Order created successfuly"})
      }else{
        res.status(401).json({message:"Order create faild.Try again"})
      }
    }catch(error){
        res.status(500).json({message:"500 server error.Please contact developer",error})
    }
};

const getOrders=async(req,res)=>{
  try{
  const findOrders=await Orders.find();
  if(findOrders){
      res.status(201).json({message:"orderss found successfuly", findOrders})
  }else{
      res.status(404).json({message:"orders not found"});
  }
}catch(error){
  res.status(500).json({message:"500 server error" + error});
}
}

module.exports={createOrder,getOrders};