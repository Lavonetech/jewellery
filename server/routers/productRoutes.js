const express=require('express');
const { createProduct, getProduct, deleteProduct, updateProduct, imageUpload, upload,getProductById } = require('../controllers/Product');
const router=express.Router();

router.delete('/delete/:id',deleteProduct);
router.post('/createproduct',upload.single('Image'),createProduct);
router.get('/getproduct',getProduct);
router.get('/getproductbyid/:id',getProductById);

router.put('/update/:id',updateProduct);
router.post('/upload', upload.single('Image'), imageUpload);

module.exports=router;