const express=require('express');
const { createUser, userLogin, getUser, updateUser, getUserById } = require('../controllers/user');
const router=express.Router();

router.post('/createuser',createUser)
router.post('/login',userLogin)
router.get('/getusers',getUser)
router.get('/getuserbyid/:id',getUserById)
router.put('/updateuser/:id',updateUser)

module.exports=router;