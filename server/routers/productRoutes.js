const express=require('express');
const { createProduct, getProduct, deleteProduct, updateProduct, imageUpload, upload,getProductById, subImages } = require('../controllers/Product');
const router=express.Router();

router.delete('/delete/:id',deleteProduct);
router.post('/createproduct',upload.array('Image'),createProduct);
// router.post('/createimages',upload.array('Image'),subImages);
router.get('/getproduct',getProduct);
router.get('/getproductbyid/:id',getProductById);

router.put('/update/:id',upload.array('Image'),updateProduct);
router.post('upload',upload.array('Image'), imageUpload);

module.exports=router;