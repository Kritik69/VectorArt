import './ContactPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import Banner2 from '../Banner2/Banner2'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'

function ContactPage() {
  return (
    <>
        <NavBar />
        <div className="contact-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>CONTACT US</b></h1>
            </div>
        </div>
        <div className="consulting-wrapper pt-5 pb-5">
            <div className="container">
                <h2 className="text-center">CONTACT US AND WE WILL REPLY AS SOON AS POSSIBLE!</h2>
                <div className="row">
                    <div className="col-md-6 inputs">
                        <input type="text" placeholder='Name' className='contact name'/>
                        <input type="text" placeholder='Email' className='contact email'/>
                        <input type="text" placeholder='Message' className='contact message'/>
                        <button className='btn-danger inp-btn'>Submit</button>
                    </div>
                    <div className="col-md-6">
                        <div className='con-wrap'>
                            <h1 className='text-danger'><FontAwesomeIcon icon={faLocation} /></h1>
                            <div className='con-con'>
                                <h3>HEAD-QUARTERS IN US</h3>
                                <p className='text-grey'>#201, 7902, Charles Thomson Lane, Annandale, VA – 22003.</p>
                            </div>
                        </div>
                        <div className='con-wrap'>
                            <h1 className='text-danger'><FontAwesomeIcon icon={faLocation} /></h1>
                            <div className='con-con'>
                                <h3>CONTACT CENTER IN INDIA</h3>
                                <p className='text-grey'>Business point, office #6, Lohana Colony, Paliram Road, Andheri West, Mumbai – 400058</p>
                            </div>
                        </div>
                        <div className='con-wrap'>
                            <h1 className='text-danger'><FontAwesomeIcon icon={faPhone} /></h1>
                            <div className='con-con'>
                                <h3>OUR PHONES:</h3>
                                <p className='text-grey'>+1 860 261 2601</p>
                            </div>
                        </div>
                        <div className='con-wrap'>
                            <h1 className='text-danger'><FontAwesomeIcon icon={faPhone} /></h1>
                            <div className='con-con'>
                                <h3>E-MAIL ADDRESS:</h3>
                                <p className='text-grey'>info@vectorart.co</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.455539876757!2d72.843971!3d19.119595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf106c248087a17c!2sBusiness%20Point!5e0!3m2!1sen!2sin!4v1657280342425!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="banner2-wrapper p-5">
            <div className="container text-center text-white">
                <h2>In depth Promotional Products Industry understanding. 5 years of Experience. One focus: Your Success.</h2>
                <div><p className="display-3"> Kick Start your project. </p><button className='b2Btn text-white'>Contact Us</button></div>
            </div>
        </div>
        <SocialMedia />
        <Footer />
    </>
  )
}

export default ContactPage