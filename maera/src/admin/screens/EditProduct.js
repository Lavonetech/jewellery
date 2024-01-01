import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form,Row, Container, Spinner } from "react-bootstrap";
import { Box } from "@mui/material";

function EditProduct() {
  const { id } = useParams();
  var navigate=useNavigate();

  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    image:""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage,setSuccessMessage]=useState("")
  const[loading,setLoading]=useState(false);
  const [file, setFile]=useState(null)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://63.250.47.54:5003/getproductbyid/${id}`);
        console.log(response.data)
        if (response.status === 200) {
          const productData = response.data.formattedProduct;
          setProduct(() => ({
            
            id: productData.id,
            name: productData.name,
            category:productData.category,
            description: productData.description,
            image:productData.image
            // Update with more fields as needed
          }));

        } else {
          console.log("Product not found");
        }
      } catch (err) {
        console.log("500 server error", err);
        setErrorMessage("500 server error, please try again");
      }
    };
  
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
 const handleFileChange=(e)=>{
  setFile(e.target.files[0]);
 }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("name", product.name);
      formData.append("category", product.category);
      formData.append("description", product.description);

      const response = await axios.put(`http://63.250.47.54:5003/update/${id}`, product);
      console.log(response.data)
      if (response.status === 200) {
        console.log("Product updated successfully",response);
        setSuccessMessage("Product Successfuly updated.You will be redirect to the dashbord")
        setLoading(true)
        setTimeout(()=>{
        navigate('/products')
        },3000)
        
       
        // You can redirect the user back to the product list or another page here
      } else {
        console.log("Product not found");
      }
    } catch (err) {
      console.log("500 server error", err);
      setErrorMessage("500 server error, please try again");
    }
  };

  
  

  return (
    <div>
      <Container>
          <Row>
          <Box sx={{ textAlign: 'center', pt:0,mb:-10 }}>
          <img src="/images/lo.png"  style={{ height: '200px', width: '200px',margin:"-3rem 0 -3rem 0" }} />
        </Box>
            <div className="col-md-6 mx-auto form-center">
            {successMessage && <div className="alert alert-primary" role="alert">{successMessage}</div>}
            {loading && <div className='d-flex'><Spinner animation="grow" variant="warning"/> <span>Please wait...</span></div>}
            <h2 className="text-center">Edit Product</h2>
            <Form onSubmit={handleSubmit} >
            <Form.Group>
              <Form.Label htmlFor="name">Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="category">Product Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={product.description}
                onChange={handleChange}
                style={{ height: "150px" }} 
              />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="image">Product Image</Form.Label>
                <Form.Control type="file"  onChange={handleFileChange} accept="image/*" />
              </Form.Group>
             
           
            {/* Add more fields as needed */}
            <div className="d-grid mt-3">
                <button class="btn full-wdth-btn" type="submit">Update product now</button>
                </div>
          </Form>
            </div> 
          </Row>
      </Container>
      
      {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
    </div>
  );
}

export default EditProduct;
