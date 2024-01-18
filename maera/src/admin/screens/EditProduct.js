import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Row, Container, Spinner } from "react-bootstrap";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [file, setFile] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://63.250.47.54:5003/getproductbyid/${id}`);
        console.log(response.data);
        if (response.status === 200) {
          const productData = response.data.formattedProduct;
          setName(productData.name);
          setCategory(productData.category);
          setDescription(productData.description);
        } else {
          console.log("Product not found");
        }
      } catch (err) {
        console.log("500 server error");
        setErrorMessage("500 server error, please try again");
      }
    };

    fetchProduct();
  }, [id]);

  const handleFileChange = (event) => {
    setFile(Array.from(event.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("description", description);
      for (let i = 0; i < file.length; i++) {
        formData.append('Image', file[i]);
      }

      const response = await axios.put(`http://localhost:5003/update/${id}`, formData);

      if (response.status === 200) {
        console.log("Product updated successfully");
        setSuccessMessage("Product Successfully updated. You will be redirected to the dashboard");
        setLoading(true);
        setTimeout(() => {
          navigate('/products');
        }, 3000);
      } else {
        console.log("Product not found or update failed");
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
          <div className="col-md-6 mx-auto form-center">
            {successMessage && <div className="alert alert-primary" role="alert">{successMessage}</div>}
            {loading && <div className='d-flex'><Spinner animation="grow" variant="warning" /> <span>Please wait...</span></div>}
            <h2 className="text-center">Edit Product</h2>
            <Form >
              <Form.Group>
                <Form.Label htmlFor="name">Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="category">Product Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={category}
                  onChange={handleCategory}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={description}
                  onChange={handleDescription}
                  style={{ height: "150px" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="image">Product Image</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} accept="image/*" multiple />
              </Form.Group>
              <div className="d-grid mt-3">
                <button className="btn full-wdth-btn" type="submit" onClick={handleSubmit}>Update product now</button>
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
