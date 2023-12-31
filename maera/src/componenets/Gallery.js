import React, { useEffect,useState } from 'react'
import Navbar from '../items/Navbar'
import Footer from '../items/Footer'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faHeart } from '@fortawesome/free-solid-svg-icons';
import Lineanimation from '../items/Lineanimation';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { Spinner } from 'react-bootstrap';

function Gallery () {
const [products,setProducts] =useState([]);
const [errorMessage,setErrorMessage]=useState("");

    useEffect(()=>{
        const getProductData=async ()=>{
          try{
            const response=await axios.get("http://localhost:5003/getproduct");
            if(response.status===200){
             const formattedData=response.data;
    
             const productArray=formattedData.formattedProduct.map((product)=>({
              id:product.id,
              image:product.image,
              product:product.name,
              description:product.description,
              
    
            }));
            setProducts(productArray)
            }else{
              setErrorMessage("Can not find products.Please refresh page again");
            }
            
          }catch(err){
            console.error(err);
            setErrorMessage("Can not find products.Please refresh page again");
          }
        }
        getProductData();
      },[]);
      
  return (
    <div>
        <Navbar/>
        <section className="section-products mt-3" id="section">
        <div className="container">
          <div className="row text-align-center">
       
          <div className="col-xl-6 col-lg-6 col-sm-6  inner-left">
         
            
           
                <h2>Our Creations</h2>
                <Lineanimation/>
              
            </div>
          </div>

          {products.length > 0 ? (
          <div className="row">
            {products.map((product) => (
                
              <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
                <div  className="single-product">
                <Link to={`/productdetails/${product.id}`}>
                  <div className="part-1">
                 <img src={`http://localhost:5003/${product.image}`} alt="product-image" />
                    <ul>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faHeart} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FontAwesomeIcon icon={faExpand} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2">
                    <h3 className="product-title">{product.product}</h3>
                  </div>
                  </Link>
                 
                </div>
              </div>
             
            ))}
            
          </div>
          
        ) : (
          <div className="mb-5">
            <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
    </Spinner>
    <span>Loading...</span>
          </div>
        )}
       
      
        </div>
     
      </section>
        <Footer/>
    </div>
  )
}

export default Gallery