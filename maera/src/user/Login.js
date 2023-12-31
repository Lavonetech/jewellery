import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'
import { Box } from '@mui/material';
function Login () {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [successMessage,setSuccessMessage]=useState("");
    const [errorMessage,setErrorMessage]=useState("");
    
    const navigate=useNavigate();
    const Decode=jwtDecode;

    const handleLogin=async(e)=>{

        e.preventDefault();
        try{
        const user=({
            email,
            password
        });
        const response=await axios.post("http://localhost:5003/login",user);
        if(response.status===200){
            const token=response.data.token;
            console.log("token",token);
            const decode=Decode(token);
            console.log(decode);
            document.cookie = `jwt=${token}; path=/; max-age=${60 * 60 * 24}`;
            setSuccessMessage("Congradulations !! you loged in successfuly");

            setTimeout(()=>{
                navigate('/');
            },2000)
        }else{
            console.log("user not found")
            setErrorMessage("Invalid email or password.Try to remember again")
            setTimeout(()=>{
         setErrorMessage("")
            },3000)
        }
        }catch(error){
         console.log("internal server error"+ error);
         setErrorMessage("Invalid email or password.Try to remember again");
         setTimeout(()=>{
            setErrorMessage("")
               },3000)
        }
    }
  return (
    <div className='container'>
                 <div className='row'>
                 <Box sx={{ textAlign: 'center', pt:0,mb:-10 }}>
          <img src="/images/l.png"  style={{ height: '200px', width: '200px',margin:"-3rem 0 -3rem 0" }} />
        </Box>
                    <div className='col-md-6 col-lg-4 mx-auto form-center'>
                        {
                             successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>
                        }
                        {
                             errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>
                        }

                        <h2 className='text-center'>Sign In</h2>
                        <Form>
                           

                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)}className="mb-2"placeholder="enter your email address"/>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Password</Form.Label>
                                <Form.Control  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="mb-2" placeholder="enter password"/>
                            </Form.Group>
                            <div className="d-grid mt-3">
                        <button  onClick={handleLogin} class="btn full-wdth-btn" type="submit">Sign In</button>
                </div>
                        </Form>
                        <div className='d-flex mt-3'>
                            <div>Not register ?</div>
                            <Link to="/register"><span className='text-b  mx-1' style={{color:'#000'}}>Register</span></Link>
                        </div>
                    </div>
                 </div>
        </div>
  )
}

export default Login