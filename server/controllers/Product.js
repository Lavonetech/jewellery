const Products = require("../Model/Product");
const multer=require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  
});

const imageUpload = async (req, res) => {
  try {
    const imagePaths = req.files.map(file => file.path);
    
    const newProduct = new Products({
      image: imagePaths
    });

    const productImage = await newProduct.save();

    if (productImage) {
      res.status(200).json({ message: 'Files uploaded successfully', image: productImage.image })
    } else {
      res.status(500).json({ message: "Product images not saved in the database" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const createProduct = async (req, res) => {
  const images = req.file.path;

  const { orderId, name, category, description } = req.body;

  try {
    const product = new Products({
      name,
      orderId,
      category,
      description,
      image: images,
    });

    const saveProduct = await product.save();
    if (saveProduct) {
      res.status(200).json({ message: "Product created successfully", saveProduct });
    } else {
      res.status(404).json("Product not found");
    }
  } catch (e) {
    res.status(500).json({ message: "500 Server error" });
  }
};


const getProduct = async (req,res) => {

  try {
    const findProducts = await Products.find();
    if (findProducts.length > 0) {
      const formattedProduct = findProducts.map(product => ({
        id:product._id,
        name:product.name,
        orderId:product.orderId,
        description:product.description,
        category:product.category,
        image:product.image
        
      }));
      res.status(200).json({ message: "Products found", formattedProduct });
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  }catch(error){
    res.status(500).json({message:error.message})
  }
};


const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id; 

    const deletedProduct = await Products.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfuly' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the product', error: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const itemId = req.params.id;
    const findProduct = await Products.findById(itemId);

    if (findProduct) {
      const formattedProduct = {
        orderId: findProduct.orderId,
        name: findProduct.name,
        description: findProduct.description,
        category:findProduct.category,
        image: findProduct.image
      };
      res.status(200).json({ message: "Product found", formattedProduct });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;

    // Check if a file is uploaded
    if (req.file) {
      // If file is uploaded, update the image field
      updatedData.image = req.file.path;
    }

    const updatedProduct = await Products.findByIdAndUpdate(productId, updatedData, { new: true });

    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.status(200).json({ message: "Product updated successfully", updatedProduct });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {upload,imageUpload,createProduct,getProduct,deleteProduct,updateProduct,getProductById};
