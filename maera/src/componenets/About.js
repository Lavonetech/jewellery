import React from "react";
import Navbar from "../items/Navbar";
import { Carousel } from "react-bootstrap";
import Footer from "../items/Footer";
import { useMediaQuery } from 'react-responsive';

function About() {

  const isMobile = useMediaQuery({ query: '(max-width:500px)' });
  return (
    <div>
      <Navbar />

      <div>
        {
          isMobile ?(
            <Carousel
            controls={false}
            indicators={false}
            fade
            interval={2000}
            className="col-xl-12  col-sm-12 zoom-carousel"
          >
            <Carousel.Item
              style={{
                position: "relative",
                backgroundImage: `url('images/mobile.jpg')`,
                loading: "lazy",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "90vh",
                width: "100%",
              }}
              className="item"
            ></Carousel.Item>
          </Carousel>

          ):(
            <div className="col-xl-12  col-md-12">
            <Carousel
              controls={false}
              indicators={false}
              fade
              interval={2000}
              className="col-xl-12  col-sm-12 zoom-carousel"
            >
              <Carousel.Item
                style={{
                  position: "relative",
                  backgroundImage: `url('images/aboutu.png')`,
                  loading: "lazy",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "90vh",
                  width: "100%",
                }}
                className="item"
              ></Carousel.Item>
            </Carousel>
          </div>
          )
        }
       
      </div>

      <section className="py-3 py-md-5 py-xl-8 ">
        <div className="container">
          <div className="row " style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
            <div className="col-lg-9 col-xl-9 about-content ">
              <p className="mb-3">
                Discover Maera Jewellery, where craftsmanship meets luxury. Our
                founders, a certified gemologist and a design-savvy engineer,
                bring a unique blend of expertise to our creations. With deep
                roots in the jewelry industry, they leverage their heritage to
                craft extraordinary pieces. Our mission is to deliver
                meticulously crafted, complex designs that reflect your unique
                style and sentiment.
              </p>
              <p className="mb-3">
                What sets us apart is our commitment to you. Our design process
                revolves around your desires, ensuring every piece is a
                personalized reflection. Based in Ceylon, we take pride in our
                heritage, sourcing exquisite blue sapphires and gems from
                Ceylon, along with GIA certified diamonds. While our roots are
                in Ceylon, our global reach serves North America and Europe. At
                Maera Jewellery, we transform your jewelry dreams into stunning
                reality, one exceptional piece at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5 " style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 inner-right-v">
              <img
                className="img-fluid"
                src="images/vision.jpg"
                style={{ width: "20rem" }}
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-align">
              <div className="text-align-center ">
                <h2>Our Vision</h2>

                <p>
                  At Maera Jewellery, we envision redefining high
                  jewelry—crafted with personalized luxury, responsibly sourced
                  gems, and uncompromising dedication to quality. We are the
                  epitome of bespoke elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row about"  style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 inner-right-v">
              <img
                className="img-fluid"
                src="images/m.jpg"
                style={{ width: "20rem" }}
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-align">
              <div className="text-align-center  ">
                <h2>Our Mission</h2>

                <p className="">
                  At Maera Jewellery, we envision redefining high
                  jewelry—crafted with personalized luxury, responsibly sourced
                  gems, and uncompromising dedication to quality. We are the
                  epitome of bespoke elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="space"></div>

      <Footer />
    </div>
  );
}

export default About;
