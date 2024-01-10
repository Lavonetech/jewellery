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
        const response=await axios.get("http://63.250.47.54:5003/getproduct");
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
           
              <h2>EXCEPTIONAL CRAFTMANSHIP</h2>
              <Lineanimation/>
              <img src="images/image1.jpeg" alt="image" loading="lazy" />
            </div>
            <div className="col-lg-6 col-sm-6 inner-right">
            
              <div className="inner-content">
               
                <p>
                Discover the artistry of Maera Jewellery, where challenging designs come to life through the skillful hands 
                of our craftsmen. Our handmade jewelry goes beyond the ordinary, with each intricate detail meticulously crafted to perfection.
                 Experience the joy of owning a one-of-a-kind masterpiece that reflects our commitment to excellence and passion for 
                the extraordinary.
                </p>
              </div>
            
            
              <Link to="/contact"className=" btn-primary  px-4  btn-main"
              >
                Contact Now
              </Link>
              
             
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
                 <img src={`http://63.250.47.54:5003/${product.image}`} alt="product-image" />
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
       
		  <Link to="/ourcreation"className="btn-primary align-items-center">More Creations</Link>
      
        </div>
     
      </section>

	  <section className="section">
<div className="container">
	<div className="row">
		<div className=" section-background ">
			 <div className=" col-xl-6 col-lg-6 col-sm-6 inner-left left-text">
       
              <h2>Sustainable Elegance</h2>
			  <p>With ethically sourced gems, eco-friendly practices, and a commitment to fair wages, Maera Jewellery embodies both beauty and responsibility.</p>
			  <p>Our jewellery isn't just an accessory, it's a statement of your values. Create pieces that not only mirror your style but also uphold your commitment to ethical and sustainable choices.
</p>

        <div className='row mt-5'>
            
            
            </div>
			 </div>
       
           <div className=" col-lg-4  col-sm-12 col-xs-12 inner-right">
             <img src="/images/maera0019.png"/>
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
        
          <h2 >Artisanal Craftsmanship</h2>
          <p>
          Embrace the intricate techniques and meticulous craftsmanship that bring our jewellery to life, 
          alluding to the mesmerizing process without revealing its closely guarded secrets.

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
