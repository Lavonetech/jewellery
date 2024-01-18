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
import { useMediaQuery } from 'react-responsive';


import axios from "axios";

import Footer from "../items/Footer";
import { Link, useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [SliceProduct, setSliceProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    "Can not find products.Please refresh page again"
  );
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width:500px)' });
  const Id = useParams();

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await axios.get("http://63.250.47.54:5003/getproduct");
        if (response.status === 200) {
          const formattedData = response.data;

          const productArray = formattedData.formattedProduct.map(
            (product) => ({
              id: product.id,
              image: product.image[0],
              product: product.name,
              description: product.description,
            })
          )
          setProducts(productArray);
          const LimitProduct = products.slice(0,13);
          setSliceProduct(LimitProduct);
        } else {
          setErrorMessage("Can not find products.Please refresh page again");
        }
      } catch (err) {
        console.error(err);
        setErrorMessage("Can not find products.Please refresh page again");
      }
    };
    getProductData();

   
  }, [products]);



  return (
      <div>
        <Navbar />
        {isMobile?(
        <div>
          
        <div >
       
                
        <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item" data-interval="4000">
      <img src="images/p8.jpg" class="d-block w-100" alt="maera jewellery header image"/>
    </div>
    <div class="carousel-item active" data-interval="4000">
      <img src="images/p3.jpg" class="d-block w-100" alt="maera jewellery header image"/>
    </div>
    <div className="carousel-item" data-interval="4000">
      <img src="images/p2.jpg" class="d-block w-100" alt="maera jewellery header image"/>
    </div>
    
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
      </div>
        ):(
<div >
<div className="col-xl-12  col-md-12 ">
    <Carousel fade interval={4000} indicators={false} className="col-xl-12  col-sm-12 zoom-carousel" >
      <Carousel.Item  style={{
        position:'relative',
          backgroundImage: `url('images/1.png')`,
          backgroundSize: "cover",
          backgroundRepeat:'no-repeat',
          
          height: "90vh",
         width:"100%"
        }}
        className="item"
       >
       
   
      </Carousel.Item>
      <Carousel.Item  style={{
          backgroundImage: `url('images/2.png')`,
          backgroundSize: "cover",
         
          height: "90vh",
          width:"100%"
        }}
        className="item"
       >
       
      </Carousel.Item>
      <Carousel.Item  style={{
          backgroundImage: `url('images/3.png')`,
          backgroundSize: "cover",
          
          height: "90vh",
          width:"100%"
        }}
        className="item"
       >
      
      </Carousel.Item>
    </Carousel>
    
    </div>
        </div>
      
        )
      }
        

        

      <div className="container">
        <div className="row">
          <div className="section-about">
            <div className="col-xl-6 col-lg-6 col-sm-12 inner-left">
              <img src="images/image1.jpeg" alt="image" loading="lazy" />
            </div>
            <div className="col-lg-6 col-sm-6 inner-right">
              <div className="inner-content">
                <h2>EXCEPTIONAL CRAFTMANSHIP</h2>
                <p>
                  Discover the artistry of Maera Jewellery, where challenging
                  designs come to life through the skillful hands of our
                  craftsmen. Our handmade jewelry goes beyond the ordinary, with
                  each intricate detail meticulously crafted to perfection.
                  Experience the joy of owning a one-of-a-kind masterpiece that
                  reflects our commitment to excellence and passion for the
                  extraordinary.
                </p>

                <Link to="/contact" className=" btn-primary  px-4  btn-main">
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-products" id="section">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 col-lg-6 col-sm-6 inner-left creation">
              <h2>Our Creations</h2>
            </div>
          </div>

          {SliceProduct.length > 0 ? (
            <div className="row">
              {SliceProduct.map((product) => (
                <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
                  <div className="single-product">
                    <Link to={`/productdetails/${product.id}`}>
                      <div className="part-1">
                        <img
                          src={`http://63.250.47.54:5003/${product.image}`}
                          alt="product-image"
                        />
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
                      <h3 className="product-title text-align-center">
                        {product.product}
                      </h3>
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
          <div className="align-items-center mt-4">
            <Link to="/ourcreation" className="btn-primary ">
              More Creations
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className=" section-background ">
              <div className="col-lg-6 col-sm-6 inner-left left-text">
                <h2>Sustainable Elegance</h2>
                <p>
                  With ethically sourced gems, eco-friendly practices, and a
                  commitment to fair wages, Maera Jewellery embodies both beauty
                  and responsibility.
                </p>
                <p>
                  Our jewellery isn't just an accessory, it's a statement of
                  your values. Create pieces that not only mirror your style but
                  also uphold your commitment to ethical and sustainable
                  choices.
                </p>
              </div>

              <div className=" col-lg-4 col-md-6 col-sm-12 inner-right ">
                <img src="/images/maera0019.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="row  section-background">
            <div className="col-lg-5 col-md-6 col-12">
              <video
                playsinline="playsinline"
                autoplay="autoplay"
                height="400"
                muted="muted"
                loop="loop"
              >
                <source src="videos/video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-9 inner-right v-content">
              <div className="">
                <h2>Artisanal Craftsmanship</h2>
                <p>
                  Embrace the intricate techniques and meticulous craftsmanship
                  that bring our jewellery to life, alluding to the mesmerizing
                  process without revealing its closely guarded secrets.
                </p>
                <div className="mt-4">
                  {" "}
                  <Link to="/contact" className="btn-primary  mt-4">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
