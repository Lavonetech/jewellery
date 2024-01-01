import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

function Register () {
const [firstName,setFirstName]=useState("");
const [lastName,setLastName]=useState("");
const [email,setEmail]=useState("");
const [phoneNumber,setPhoneNumber]=useState("");
const [password,setPassword]=useState("");
const [successMessage,setSuccessMessage]=useState("")
const [errorMessage,setErrorMessage]=useState("")

const navigate=useNavigate();


const userRegister = async (e) => {
    e.preventDefault();
    try {
        const user = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        };

        const response = await axios.post('http://63.250.47.54:5003/createuser', user);

        if (response.status === 200) {
            // Handle successful response
            setSuccessMessage("You registered successfully. You will be redirected to the login page");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
            setPassword("");

            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } else {
            // Handle other non-successful responses
            throw new Error(response.statusText || "An error occurred");
        }
    } catch (error) {
        
        console.log("Error:", error.message);

        // Check for duplicate email error
        if (error.response && error.response.status === 422 && error.response.data.error === "DuplicateEmail") {
            setErrorMessage("Email address already exists. Please try another email address");

            setTimeout(()=>{
                setErrorMessage("")
            },4000)
        } else {
            setErrorMessage("An internal server error occurred. Please try again later.");
            setTimeout(()=>{
                setErrorMessage("")
            },4000)
        }
    }
};

    
  return (
    <div>

        <div className='container'>
                 <div className='row'>
                    <div className="">
                 <Box sx={{ textAlign: 'center', pt:0,mb:-10 }}>
          <img src="/images/picture.png"  style={{ height: '200px', width: '200px',margin:"-3rem 0 -3rem 0" }} />
        </Box>
        </div>
                    <div className='col-md-6 col-lg-4 mx-auto form-center'>
                        {
                             successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>
                             
                        }
                        {
                             errorMessage && <div className="alert alert-warning" role="alert">{errorMessage}</div>
                             
                        }
                        <h2 className='text-center'>Register here</h2>
                        <Form>
                            <Form.Group>
                                
                                <Form.Control value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='mb-2' placeholder='enter first name'/>
                              
                             
                               

                            </Form.Group>
                         <Form.Group>
                         <Form.Control  value={lastName} onChange={(e)=>setLastName(e.target.value)}className="mb-2" placeholder='enter last name'/>
                         </Form.Group>
                            <Form.Group>
                                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)}className="mb-2"placeholder="enter your email address"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}className="mb-2"placeholder="enter your phone number"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)}className="mb-2" placeholder="enter password"/>
                            </Form.Group>
                            <div className="d-grid mt-3">
                        <button onClick={userRegister} class="btn full-wdth-btn" type="submit">Register</button>
                </div>
                        </Form>
                        <div className='mt-3 d-flex'>
                            <div>Already register? </div>
                            <Link to="/login"><span className='text-b  mx-1' style={{color:'#000'}}>Sign In</span></Link>
                        </div>
                    </div>
                 </div>
        </div>
    </div>
  )
}

export default Register