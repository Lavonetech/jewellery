import { faLocation, faPhone, faRing, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from '../items/Navbar'
import Footer from '../items/Footer'
import { Box } from '@mui/material'

function Contact () {
  return (
    <div>
        
        <Navbar/>
        <section>
            <div className='container'>
                <div className='row justify-content-center'>
                   
                    <div className='d-flex col-lg-3 col-md-4 col-sm-12 text-align-center  item-box mt-3'>
                        <div className='item-box-content'>
                        <FontAwesomeIcon icon={faLocation} style={{ fontSize: '3em', color: '#3A4750 ' }}/>
                    <h4 className='mt-3'>Address</h4>
                    <p className='mb-1'>Colombo | Vancouver</p>
                        </div>
                    </div>
                   
                    <div className='col-lg-3 col-md-4 col-sm-12 text-align-center item-box mt-3'>
                        <div className='item-box-content'>
                        <FontAwesomeIcon icon={faPhone} style={{ fontSize: '3em', color: '#3A4750 ' }}/>
                    <h4 className='mt-3'>Phone</h4>
                    <p className='mb-1'>+94 701 465 161 / +1 778 223 4941</p>
                        </div>
                    </div>
                   
                    <div className='col-lg-3 col-md-4 col-sm-12 text-align-center item-box mt-3'>
                        <div className='item-box-content'>
                        <FontAwesomeIcon icon={faVoicemail} style={{ fontSize: '3em', color: '#3A4750 ' }}/>
                    <h4 className='mt-3'>Email</h4>
                    <p className='mb-1'>inquiries@maerajewellery.com</p>
                        </div>
                    </div>
                   
                   
                   
                </div>
            </div>
        </section>
        <div className='space'></div>
        <Footer/>
    </div>
  )
}

export default Contact