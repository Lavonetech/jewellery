import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { Box, CssBaseline } from "@mui/material";

import {useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const [product, setProduct] = useState("");
 
  const [orderId, setOrderId] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage,setSuccessMessage]=useState("")
  const [file, setFile] = useState([]);
  const navigate=useNavigate()

  const handleProduct=(e)=>{
    setProduct(e.target.value);
  }
  
  const handleId=(e)=>{
    setOrderId(e.target.value);
  }
  const handleCategory=(e)=>{
    setCategory(e.target.value);
  }
  const handleDescription=(e)=>{
    setDescription(e.target.value);
  }
  
  const handleFileChange = (event) => {
    setFile(Array.from(event.target.files));
  };
 



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('orderId', orderId);
      formData.append('name', product);
      formData.append('category', category);
      formData.append('description', description);
  
      // Append each file separately
      for (let i = 0; i < file.length; i++) {
        formData.append('Image', file[i]);
      }
  
      const response = await axios.post("http://localhost:5003/createproduct",formData);
  
      if (response) {
        setSuccessMessage("Product created successfully. You will redirect to the dashboard.");
        console.log("Successful", response.data);
        setTimeout(() => {
          navigate("/products");
        }, 3000);
      }else{
        setTimeout(() => {
          setErrorMessage(
            "An external error. Please try again."
          );
        }, 3000);
      }
    } catch (error) {
      setTimeout(() => {
        setErrorMessage(
          "You cannot create a product. Please try again."
        );
      }, 3000);
      console.error(error);
    }
  };
  

  return (
    
    <div className="col-md-12 wrapper">
           
      <CssBaseline />
      <div className="inner">
        <Form>
          <h3>Create a product</h3>
          {errorMessage && <div className="alert alert-danger" role='alert'>{errorMessage}</div>}
          {successMessage && 
          <>
          <div className="alert alert-success" role='alert'>{successMessage}</div>
          <div className='d-flex align-items-center justify-content-center'><Spinner animation="grow" variant="warning"/> <span>Please wait...</span></div>
          </>
          }
          
          <div className="form-group">
            <div className="form-wrapper">
              <Form.Label>Product Id</Form.Label>
              <InputGroup className="form-holder">
                <InputGroup.Text>
                  <i className="zmdi zmdi-account-o"></i>
                </InputGroup.Text>
                <FormControl type="text" value={orderId} onChange={handleId} />
              </InputGroup>
            </div>
            <div className="form-wrapper">
              <Form.Label>Product Name</Form.Label>
              <InputGroup className="form-holder">
                <InputGroup.Text>
                  <i className="zmdi zmdi-account-o"></i>
                </InputGroup.Text>
                <FormControl type="text" value={product} onChange={handleProduct} />
              </InputGroup>
            </div>
          </div>
          <div className="form-group">
           
            <div className="form-wrapper">
              <Form.Label>Product Category</Form.Label>
              <InputGroup className="form-holder">
                <InputGroup.Text>
                  <i className="zmdi zmdi-account-o"></i>
                </InputGroup.Text>
                <FormControl type="text" value={category} onChange={handleCategory} />
              </InputGroup>
            </div>
            <div className="form-wrapper">
              <Form.Label>Product Description</Form.Label>
              <InputGroup className="form-holder">
                <InputGroup.Text>
                  <i className="zmdi zmdi-account-o"></i>
                </InputGroup.Text>
                <FormControl as="textarea" rows={5}value={description} onChange={handleDescription}accept="image/*" />
              </InputGroup>
            </div>
          </div>
          <div className="form-group">
            
          </div>
          <div className="form-group">
            <div className="form-wrapper">
              <Form.Label>Product Image</Form.Label>
              <InputGroup className="form-holder">
                <InputGroup.Text>
                  <i className="zmdi zmdi-account-o"></i>
                </InputGroup.Text>
                <FormControl type="file" onChange={handleFileChange}accept="image/*" multiple/>
              </InputGroup>
            </div>
          </div>
          <div></div>
          <div className="form-end">
            <div className="button-holder">
              <Button className="full-wdth-btn create-btn"onClick={handleSubmit}>Create Product</Button>
            </div>
          </div>
        </Form>

      
      </div>
      {/* <h2>Image Upload</h2>
       
          <input type="file" onChange={handleFileChange} accept="image/*" />
          <button onClick={handleUpload }type="submit">Upload</button> */}
      
    </div>
  );
};

export default CreateProduct;
