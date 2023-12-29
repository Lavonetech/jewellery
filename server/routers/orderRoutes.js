const express=require('express');
const { createOrder, getOrders } = require('../controllers/Order');

const router=express.Router();

router.post('/createorder',createOrder)
router.get('/getorders',getOrders)


module.exports=router;