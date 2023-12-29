const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({
   product:{
    type:String
    },
    metal:{
    type:String

    },

    stone:{
    type:String
    },

    size:{
   type:String
    },

    userName:{
    type:String
    },
   category:{
    type:String
    },
  message:{
    type:String
    }
});

const Orders=mongoose.model('orders',OrderSchema);

module.exports=Orders;