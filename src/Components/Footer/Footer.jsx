import './Footer.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'
import payPal from './../MediaFiles/payments/PayPal.png'
import master from './../MediaFiles/payments/master.png'
import icici from './../MediaFiles/payments/icici.png'
import visa from './../MediaFiles/payments/Visa.png'

function Footer() {
  return (
    <>
        <div className="footer1-wrapper p-5">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h4>COMPANY</h4>
                  <ul>
                    <li className='li'>About Us</li>
                    <li className='li'>History</li>
                    <li className='li'>Testimonials</li>
                    <li className='li'>Contact Us</li>
                    <li className='li'>Request A Quote</li>
                    <li className='li'>Pay Online</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4>SEVICES</h4>
                  <ul>
                    <li><Link className='li' to='/graphic'>Graphic Design</Link></li>
                    <li><Link className='li' to='/digitizing'>Digitizing</Link></li>
                    <li><Link className='li' to='/imageediting'>Image Editing</Link></li>
                    <li><Link className='li' to='/technology'>Technology</Link></li>
                    <li><Link className='li' to='/artandorder'>Art & Order Management</Link></li>
                    <li><Link className='li' to='/designanddata'>Design & Data Services</Link></li>
                    <li><Link className='li' to='/digitalmarketing'>Digital Marketing</Link></li>
                    <li><Link className='li' to='/animation'>ANIMATION</Link></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4>SOLUTIONS</h4>
                  <ul>
                    <li>
                      <Link className='li' to='/promo'>Virtual Sampling - Promo Virtuals</Link>
                    </li>
                    <li>
                      <Link className='li' to='/technologysolutions'>Technology Solutions</Link>
                    </li>
                    <li>
                      <Link className='li' to='/erp'>ERP & Order Management</Link>
                    </li>
                    <li>
                      <Link className='li' to='/offshore'>Offshore Development Center</Link>
                    </li>
                    <li>
                      <Link className='li' to='/consulting'>Consulting</Link>
                    </li>
                    <li>
                      <Link className='li' to='/maintenance'>Maintenance & Upgrades</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4>PAY ONLINE</h4>
                  <ul>
                    <li className="payImgDiv li"><img className='payImg' src={payPal} alt="" /></li>
                    <li className="payImgDiv li"><img className='payImg' src={visa} alt="" /></li>
                    <li className="payImgDiv li"><img className='payImg' src={master} alt="" /></li>
                    <li className="payImgDiv li"><img className='payImg' src={icici} alt="" /></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className="footer2-wrapper p-2">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <FontAwesomeIcon icon={faPhone} /> <span className='text-danger'><a href="tel:+1 (650) 610-1108">+1 (650) 610-1108</a></span>
                </div>
                <div className="col-md-3">
                  <FontAwesomeIcon icon={faEnvelope} /> <span className='text-danger'><a href="mailto:info@vectorart.co">info@vectorart.co</a></span>
                </div>
                <div className="col-md-6">
                  <FontAwesomeIcon icon={faLocation} /> <span>541 Taylor Way #10, San Carlos, CA 94070, USA</span>
                </div>
              </div>
            </div>
        </div>
        <div className="footer3-wrapper p-2">
            <div className="container">
              <div className="row foot3Row">
                <div className="col-md-6">
                  <div className='foot3Text'>© Copyright 2022 <a href="https://vectorart.co/">VectorArt</a> | All rights reserved</div>
                </div>
                <div className="col-md-6 foot3RowDiv">
                  <div><Link to='/privacypolicy'>Privacy Policy</Link></div>
                  <div><Link to='/terms'>Terms and Condition</Link></div>
                  <div><Link to='/refund'>Refund and Cancellation Policy</Link></div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Footer