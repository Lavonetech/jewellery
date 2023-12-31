import React from 'react'
import Navbar from '../items/Navbar'
import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faRing } from '@fortawesome/free-solid-svg-icons'
import Footer from '../items/Footer'
import Lineanimation from '../items/Lineanimation'
import { Box } from '@mui/material'

function  About() {
  return (
    <div>
        <Navbar/>

        <div >


<div className="col-xl-12  col-md-12">
    <Carousel controls={false} indicators={false} fade interval={2000}  className="col-xl-12  col-sm-12 zoom-carousel" >
      
      <Carousel.Item  style={{
         position:'relative',
          backgroundImage: `url('images/aboutu.png')`,
          loading:"lazy",
          backgroundSize: "cover",
          backgroundPosition:'center',
          height: "90vh",
          width:"100%"
        }}
        className="item"
       >
      
      </Carousel.Item>
      
    </Carousel>
    </div>
        </div>

        <section className="py-3 py-md-5 py-xl-8">
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-lg-9 col-xl-9'>
        <p className="mb-3">Meet the visionaries behind Maera Jewellery, where the fusion of craftsmanship and luxury takes center stage. Our two founders bring a unique blend of expertise to the world of jewelry. One founder is a certified gemologist, ensuring that the finest materials and gemstones, including exquisite Ceylonese blue sapphires, are at the core of our creations. The other founder, an engineer by profession, has an innate talent for design that flows effortlessly.</p>
        <p className="mb-3">Hailing from a family with deep roots in the jewelry industry, our founders decided to leverage their rich heritage and knowledge to create something extraordinary. At Maera Jewellery, our mission is to bring forth unparalleled, complex pieces that are meticulously crafted with love and precision.</p>
        <p className="mb-3">What truly sets us apart is our commitment to you, the customer. Our design process revolves around your desires and aspirations, ensuring that every piece we create is a reflection of your unique style and sentiment. Based in Ceylon, we take immense pride in our Ceylonese origins and the exceptional craftsmanship that is synonymous with our heritage. We source exquisite blue sapphires and other gems from Ceylon, in addition to handpicking diamonds and other precious stones from the world's best sources. While we operate from the heart of Ceylon, our global reach primarily serves North America and Europe. At Maera Jewellery, we are here to turn your jewelry dreams into a stunning reality, one exceptional piece at a time.</p>
      </div>
    </div>

    <div className='row justify-content-center'>
      <div className='col-lg-9 col-md-9 mt-3'>
        <a
          href="/contact"
          role="button"
          className=" btn-primary  px-5 btn-gallery"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>


<section>
    <div className='container'>
       <div className='row mt-5'>
      
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 '>
            <div className='text-align-center mt-5 left-text'>
            <h2 className=' h1 mb-3'>Our Vision</h2>
            
            <p className="mb-2">At Maera Jewellery, we envision redefining high jewelry—crafted with personalized luxury, responsibly sourced gems, and uncompromising dedication to quality. We are the epitome of bespoke elegance.</p>
            </div>
            
              
            
            
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 inner-right-v'>
            <img className='img-fluid rounded' src="images/vision.jpg"/>
        </div>

       </div>
     
    </div>
</section>

<section>
  <div className='container'>
  <div className='row mt-5'>
       <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12  inner-right-v'>
            <img className='img-fluid rounded' src="images/mission.png"/>
        </div>
       <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' style={{marginTop:'6rem'}}>
            <div className='text-align-center '>
            <h2 className=' h1 mb-3'>Our Mission</h2>
            <Lineanimation/>
            <p className="mb-3">At Maera Jewellery, our mission is to transcend traditional boundaries in high jewelry, crafting exceptional pieces that tell unique stories. Guided by artisanal craftsmanship and an unwavering commitment to ethical gemstone sourcing, we bring custom creations to life with meticulous attention to detail. Our customer-centric approach ensures an unparalleled experience, delivering timeless, handcrafted treasures that redefine the essence of elegance.</p>
            </div>
            
            {/* <div className='d-flex mt-5'>
            <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary ">
                  <FontAwesomeIcon icon={faGem} style={{ fontSize: '2em', color: '#ffbf00 ' }}/>
                  </div>
                  <div>
                    <h4 class="mb-3">Innovative Craftsmanship</h4>
                    <p class="text-secondary mb-0">Pioneer inventive design, shaping the future of high craftsmanship.</p>
                  </div>
                </div>
              </div>
            <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary ">
                  <FontAwesomeIcon icon={faGem} style={{ fontSize: '2em', color: '#ffbf00 ' }}/>
                  </div>
                  <div>
                    <h4 class="mb-3">Ethical Excellence</h4>
                    <p class="text-secondary mb-0">Commitment to responsible practices, excellence in ethical gem crafting.</p>
                  </div>
                </div>
              </div>
            </div> */}
            
        </div>
        
       </div>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default About