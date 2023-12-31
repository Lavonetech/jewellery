import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGem, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
function Footer () {
  return (
    <div>
        
  
  <footer className="text-center text-lg-start bg-body-tertiary text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  <div className='me-5 d-none d-lg-block '>
  <span><p>Get connected with us on social networks:</p></span>
  </div>
  <div>
  <a href="https://www.facebook.com/share/MaMiKRpbENbrdqGN/" className="me-4 text-reset" style={{fontSize:'1.5rem'}}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/maerajewellery?utm_source=qr" className="me-4 text-reset" style={{fontSize:'1.5rem'}}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="me-4 text-reset" style={{fontSize:'1.5rem'}}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://www.linkedin.com/company/maera-jewellery/" className="me-4 text-reset" style={{fontSize:'1.5rem'}}>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
     
      
    </div>

  </section>
  
  <section className="">
    <div className='container text-center text-md-start mt-5'>
        <div className='row mt-3'>
          <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
          {/* <h6 className="text-uppercase fw-bold mb-4">
          <FontAwesomeIcon icon={faGem} className="me-3" />Maera Jewellery
          </h6> */}
          <div className='d-flex align-items-center justify-content-center logo ' >
          <img src="/images/png-03.png"  style={{ height: '180px', width: '200px' }} />
          </div>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
           Useful Link
          </h6>
          <p>
            <a href="about-us" className="text-reset">About Us</a>
          </p>
          <p>
            <a href="process" className="text-reset">Our Process</a>
          </p>
          <p>
            <a href="gallery" className="text-reset">Gallery</a>
          </p>
          <p>
            <a href="contact" className="text-reset">Contact Us</a>
          </p>
        </div>

        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
           <h6 className='text-uppercase fw-bold mb-4'>Follow</h6>

           <p>
            <a href="https://www.facebook.com/share/MaMiKRpbENbrdqGN/" className="text-reset">Facebook</a>
          </p>
          <p>
            <a href="https://www.instagram.com/maerajewellery?utm_source=qr" className="text-reset">Instagram</a>
          </p>
          <p>
            <a href="#!" className="text-reset">WhatsApp</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/company/maera-jewellery/" className="text-reset">LinkedIn</a>
          </p>
          
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><FontAwesomeIcon icon={faHome} className="me-3" /> Colombo | Vancouver, Sri Lanka</p>
      <p><FontAwesomeIcon icon={faEnvelope} className="me-3" /> info@maerajewellery.com</p>
      <p><FontAwesomeIcon icon={faPhone} className="me-3" />+94 701 465 161 / +1 778 223 4941</p>
   
    
        </div>
        </div>
    </div>
  </section>



 
 
</footer>

    </div>
  )
}

export default Footer;