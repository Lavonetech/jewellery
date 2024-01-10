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
      <div className='col-lg-9 col-xl-9 about-content'>
        <p className="mb-3">Discover Maera Jewellery, where craftsmanship meets luxury. Our founders, a certified gemologist and a design-savvy engineer, bring a unique blend of expertise to our creations. With deep roots in the jewelry industry, they leverage their heritage to craft extraordinary pieces. Our mission is to deliver meticulously crafted, complex designs that reflect your unique style and sentiment.</p>
        <p className="mb-3">What sets us apart is our commitment to you. Our design process revolves around your desires, ensuring every piece is a personalized reflection. Based in Ceylon, we take pride in our heritage, sourcing exquisite blue sapphires and gems from Ceylon, along with GIA certified diamonds. While our roots are in Ceylon, our global reach serves North America and Europe. At Maera Jewellery, we transform your jewelry dreams into stunning reality, one exceptional piece at a time.</p>
       
      </div>
    </div>

    
  </div>
</section>


<section>
    <div className='container'>
       <div className='row mt-5'>
      
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 text-align'>
            <div className='text-align-center  '>
            <h2 className=' h1 mb-3'>Our Vision</h2>
            
            <p className="mb-2">At Maera Jewellery, we envision redefining high jewelry—crafted with personalized luxury, responsibly sourced gems, and uncompromising dedication to quality. We are the epitome of bespoke elegance.</p>
            </div>
            
              
            
            
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 inner-right-v'>
            <img className='img-fluid' src="images/vision.jpg"/>
        </div>

       </div>
     
    </div>
</section>

<section>
  <div className='container'>
  <div className='row mt-5'>
       <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12  inner-right-v'>
            <img className='img-fluid' src="images/mission.jpg" style={{width:'30rem'}}/>
        </div>
       <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 text-align' >
            <div className='text-align-center '>
            <h2 className=' h1 mb-3'>Our Mission</h2>
            <Lineanimation/>
            <p className="mb-3">At Maera Jewellery, our mission is to transcend traditional boundaries in high jewelry, crafting exceptional pieces that tell unique stories. Guided by artisanal craftsmanship and an unwavering commitment to ethical gemstone sourcing, we bring custom creations to life with meticulous attention to detail. Our customer-centric approach ensures an unparalleled experience, delivering timeless, handcrafted treasures that redefine the essence of elegance.</p>
            </div>
            
            
        </div>
        
       </div>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default About