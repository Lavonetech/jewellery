import React from 'react'
import Navbar from '../items/Navbar'
import { Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import Footer from '../items/Footer'


function Process() {
    return (
        <div>


            <Navbar />

            <section className='process-section'>
                <div className='container'>
                    <div className='row d-flex justify-content-center item'>
                        <div class="col-lg-9 col-md-6 col-12 iitem">

                            <h2>Design Consultation</h2>
                            <p>At Maera Jewellery, our expert designers offer a personalized experience to create bespoke jewelry that perfectly captures your style, sentiments, and stories. Through in-depth consultations, we collaboratively conceptualize your design, explore a wide range of materials and gemstones, and customize every detail to ensure your piece reflects your personality. </p>

                        </div>
                        <div class="col-lg-9 col-md-6 col-12 iitem">

                            <h2>Conceptualization</h2>
                            <p> During the conceptualization phase of our Personalized Jewelry Design Consultation, our aim is to breathe life into your unique vision. This step is all about turning your ideas, stories, and desires into tangible design concepts. Together, we'll brainstorm various design elements, explore different materials and styles, and even review sketches, images, and examples. We'll take it a step further by showing you drawings and Computer-Aided Design (CAD) renderings of different options for your design request. This collaborative process is where your dreams start to take shape, and it sets the foundation for crafting a piece of jewelry that will be as exceptional and personal as the story it tells. </p>

                        </div>
                        <div class="col-lg-9 col-md-6 col-12 iitem">

                            <h2>Quotation</h2>
                            <p>Following the design phase, we'll provide you with a detailed quote for your personalized jewelry.  Our aim is to offer complete transparency and ensure your personalized jewelry fits both your vision and budget seamlessly.</p>

                        </div>
                        <div class="col-lg-9 col-md-6 col-12 iitem">

                            <h2>Sourcing</h2>
                            <p>Our dedicated team scours the finest ethically sourced materials to bring your design to life. Whether it's sourcing rare gemstones, selecting the perfect metal, or ensuring the highest quality components, we leave no stone unturned to ensure your piece is made with the utmost care and integrity.</p>

                        </div>
                        <div class="col-lg-9 col-md-6 col-12 iitem">

                            <h2>Production</h2>
                            <p>Our skilled artisans, with years of experience and an unwavering dedication to their craft, will bring your personalized jewelry to life. Every detail, from setting precious stones to shaping intricate designs, is executed with precision and care. Our commitment to quality is evident in every piece we create, ensuring that your jewelry will not only be a stunning work of art but also a testament to our exceptional craftsmanship. Your unique piece is crafted to stand the test of time, radiating beauty and sentiment for generations to come.</p>

                        </div>
                        <div class="col-lg-9 col-md-6 col-12 iitem">

                            <h2>Delivery</h2>
                            <p>We understand that anticipation is high, and we're committed to delivering your unique piece in a timely manner. Typically, our delivery time ranges from 2 to 6 weeks, depending on the complexity of your design and the materials involved. Rest assured, we take the utmost care in packaging and securing your jewelry for a safe journey to your doorstep. Your piece will arrive, ready to be worn and cherished, and we're excited to see it bring joy to your life.</p>

                        </div>
                    </div>
                </div>
            </section>
            <div className='space'></div>
            <Footer />
        </div>
    )
}

export default Process
