const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({

    name: {
        type: String,
      
      },
      orderId: {
        type: Number,
       
      },
      description: {
        type: String,
       
       
      },
      price: {
        type: Number,
        
       
      },
      stock: {
        type: Number,
        require:true
      },
      category: {
        type: String,
        
      },
    hash:{
        type:String
    },
    image:[{
        type:String
    }]
})

const Products=mongoose.model('product',productSchema);
module.exports=Products;