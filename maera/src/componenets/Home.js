import React, { useEffect, useState } from "react";
import Navbar from "../items/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faHeart,
  faPlus,
  faExpand,
  faRing,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

import Carousel from 'react-bootstrap/Carousel';

import axios from "axios";

import Footer from "../items/Footer";
import Lineanimation from "../items/Lineanimation";
import { Link, useParams } from "react-router-dom";
import { AddBoxRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Spinner } from "react-bootstrap";


const Home = () => {
const [products,setProducts] =useState([]);
const [SliceProduct,setSliceProduct]=useState([]);
const [errorMessage,setErrorMessage] =useState("Can not find products.Please refresh page again");
const [loading,setLoading]=useState(false);

const Id =useParams();

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
        const LimitProduct=products.slice(0,8);
        setSliceProduct(LimitProduct);
        
        }else{
          setErrorMessage("Can not find products.Please refresh page again");
        }
        
      }catch(err){
        console.error(err);
        setErrorMessage("Can not find products.Please refresh page again");
      }
    }
    getProductData();
  },[products]);
  

  return (
    <div>
      <div>
      
        <Navbar />
        <div >


<div className="col-xl-12  col-md-12">
    <Carousel fade={false} interval={3000} indicators={false} className="col-xl-12  col-sm-12 zoom-carousel" >
      <Carousel.Item  style={{
        position:'relative',
          backgroundImage: `url('images/1.png')`,
          loading:"lazy",
          backgroundSize: "cover",
          backgroundRepeat:'no-repeat',
          loading:"lazy",
          height: "90vh",
         width:"100%"
        }}
        className="item"
       >
       
   
      </Carousel.Item>
      <Carousel.Item  style={{
          backgroundImage: `url('images/2.png')`,
          loading:"lazy",
          backgroundSize: "cover",
          loading:"lazy",
          height: "90vh",
          width:"100%"
        }}
        className="item"
       >
       
      </Carousel.Item>
      <Carousel.Item  style={{
          backgroundImage: `url('images/3.png')`,
          loading:"lazy",
          backgroundSize: "cover",
          loading:"lazy",
          height: "90vh",
          width:"100%"
        }}
        className="item"
       >
      
      </Carousel.Item>
    </Carousel>
    
    </div>
   
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="section-about">
            <div className="col-xl-6 col-lg-6 col-sm-6 inner-left">
           
              <h2>Exceptional Craftsmanship</h2>
              <Lineanimation/>
              <img src="images/image1.jpeg" alt="image" loading="lazy" />
            </div>
            <div className="col-lg-6 col-sm-6 inner-right">
              <div>
                <h3>Premium Materials</h3>
                <p>
                Elevate your style with Maera's commitment to excellence. We meticulously select premium, ethically sourced materials, ensuring that each piece boasts not only breathtaking aesthetics but also a conscious and sustainable elegance.
                </p>
              </div>
              <div className="inner-content">
                <h3>Innovative Techniques</h3>
                <p>
                At the intersection of tradition and innovation, Maera Jewellery employs cutting-edge techniques. Our skilled artisans seamlessly blend age-old craftsmanship with modern technology, pushing the boundaries of jewelry design to create extraordinary, timeless pieces.
                </p>
              </div>
              <div className=" inner-content">
                <h3>Custom Creations</h3>
                <p>
                Immerse yourself in the journey of self-expression with Maera Jewellery. Collaborate with our experts to design personalized pieces that reflect your unique style and story, turning your dream jewelry into a reality that resonates with individuality and inspiration.
                </p>
              </div>
            
              <a
                href="/contact"
                
                className=" btn-primary  px-5 btn-gallery btn-main "
              >
                Contact Now
              </a>
              
             
            </div>
          </div>
        </div>
      </div>

      <section className="section-products" id="section">
        <div className="container">
          <div className="row ">
       
          <div className="col-xl-6 col-lg-6 col-sm-6 inner-left">
         
            
           
                <h2>Our Creations</h2>
                <Lineanimation/>
              
            </div>
          </div>

          {SliceProduct.length > 0 ? (
          <div className="row">
            {SliceProduct.map((product) => (
                
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
                  </Link>
                  <div className="part-2">
                    <h3 className="product-title text-align-center">{product.product}</h3>
                  </div>
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
       
		  <a href="/gallery"className="btn-primary align-items-center">View More Creations</a>
      
        </div>
     
      </section>

	  <section className="section">
<div className="container">
	<div className="row">
		<div className=" section-background ">
			 <div className=" col-xl-6 col-lg-6 col-sm-6 inner-left left-text">
       
              <h2>Our Story and Values</h2>
			  <p>Our jewelry shop was established in 1980 by the talented John Maera, simply out of his love for creating exquisite, enchanting pieces that last a lifetime. From humble beginnings to becoming the talk of the town, we have grown into an iconic brand, with Maera Jewelry in high demand.</p>
			  <p>Each piece of Maera Jewelry is handcrafted with precision and care, using only the finest materials, sourced ethically, and with sustainability in mind. Our designers work tirelessly to invent new techniques and create timeless jewelry that you’ll treasure forever.</p>

        <div className='row mt-5'>
            
            
            </div>
			 </div>
       
           <div className=" col-lg-4  col-sm-12 col-xs-12 inner-right">
             <img src="/images/maera.png"/>
		   </div>
		</div>
	</div>
</div>
	  </section>

  
	  <section className="section gallery-section">
  <div className="container">
    <div className="row justify-content-center">
    <div className="col-lg-6 col-md-6 col-12">
<video playsinline="playsinline" autoplay="autoplay" height="400" muted="muted" loop="loop">
    <source src="videos/video.mp4" type="video/mp4"/>
  </video>

</div>
      <div className="col-lg-6 col-md-6 col-sm-6 content-intro-video">
        
          <h2 >Find Yours</h2>
          <p>
            Why settle for ordinary when you can have extraordinary? Browse
            our collection and start adorning yourself with fabulous pieces
            that’ll make heads turn. Click below to explore.
          </p>
		  <a href="/contact" className="btn-primary  mt-4">
         Contact Us
        </a>
        </div>
       
    </div>
  </div>
</section>
<Footer />
    </div>
  );
};

export default Home;
