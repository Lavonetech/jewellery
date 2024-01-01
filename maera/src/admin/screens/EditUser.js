import { Box } from '@mui/material';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Form, Spinner} from 'react-bootstrap';
import {  useNavigate, useParams } from 'react-router-dom';

function EditUser () {
    const { id } = useParams();
    var navigate=useNavigate();
  
    const [user, setUser] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });
  
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage,setSuccessMessage]=useState("")
    const[loading,setLoading]=useState(false);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://63.250.47.54:5003/getuserbyid/${id}`);
          console.log(response.data)
          if (response.status === 200) {
            const userData = response.data.user;
            setUser(() => ({
              
              id: userData.id,
              firstName:userData.firstName,
              lastName:userData.lastName,
              email:userData.email,
              phoneNumber:userData.phoneNumber,
              password:userData.password
            
            }));
  
          } else {
            console.log("Usernot found");
          }
        } catch (err) {
          console.log("500 server error", err);
          setErrorMessage("500 server error, please try again");
        }
      };
    
      fetchUser();
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(`http://63.250.47.54:5003/updateuser/${id}`,user);
    
        if (response) {
          console.log("User updated successfully",response);
          setSuccessMessage("User Successfuly updated.You will be redirect to the dashbord")
          setLoading(true);

          setTimeout(()=>{
          navigate('/customers')
          },5000)
          setUser({
           firstName:'',
            lastName:'',
            email:'',
            password:'',
            phoneNumber:''
           
          });
         
          // You can redirect the user back to the product list or another page here
        } else {
          console.log("Server return error");
        }
      } catch (err) {
        console.log("500 server error", err);
        setErrorMessage("500 server error, please try again");
      }
    };
  
    
  return (
    <div>
    <div className='container'>
    <div className='row'>
    <Box sx={{ textAlign: 'center', pt:0,mb:-10 }}>
          <img src="/images/lo.png"  style={{ height: '200px', width: '200px',margin:"-3rem 0 -3rem 0" }} />
        </Box>
      <div className="col-md-6 mx-auto form-center">
      {successMessage && <div className="alert alert-primary" role="alert">{successMessage}</div>}
      {loading && <div className='d-flex'><Spinner animation="grow" variant="warning"/> <span>Please wait...</span></div>}
             
     
      <h2 className="text-center">Edit User</h2>
      <Form  onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="firstName">Firstname</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="lastName">Lastname</Form.Label>
        <Form.Control
         type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
         
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
         type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
         
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
         type="password"
          name="password"
          onChange={handleChange}
         
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="description">Phone Number</Form.Label>
        <Form.Control
         type="text"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
        
        />
      </Form.Group>
      {/* Add more fields as needed */}
      <div className="d-grid mt-3">
          <button className="btn full-wdth-btn" type="submit">Update user now</button>
          </div>
    </Form>
      </div> 
    </div>
</div>

{errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
</div>
  )
}

export default EditUser