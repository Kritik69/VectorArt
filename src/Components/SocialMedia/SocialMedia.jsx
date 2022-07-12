import './SocialMedia.css'
import React from 'react'
import I1 from './../MediaFiles/ProudMembers/1.png'
import I2 from './../MediaFiles/ProudMembers/2.png'
import I3 from './../MediaFiles/ProudMembers/3.png'
import I4 from './../MediaFiles/ProudMembers/4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faLinkedin,  faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

function SocialMedia() {
  return (
    <>
        <div className="social-wrapper p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>GET IN TOUCH</h3>
                        <p style={{color:'grey'}}>Stay connected with us for the latest updates.</p>
                        <div className="mail">
                            <input type="text" className='inputMail' placeholder='Example@gmail.com' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>FOLLOW US</h3>
                        <p style={{color:'grey'}}>Stay up-to-date with news, jobs, events and information on our services.</p>
                        <div className='socialIconDiv'>
                            <a href='https://www.instagram.com/vectorartusa/' target='blank'><FontAwesomeIcon className='display-1' icon={faInstagram} /></a>
                            <a href='https://twitter.com/vart_services' target='blank'><FontAwesomeIcon className='display-1' icon={faTwitter} /></a>
                            <a href='https://www.linkedin.com/company/vectorart' target='blank'><FontAwesomeIcon className='display-1' icon={faLinkedin} /></a>
                            <a href='https://www.facebook.com/vectorart.co/' target='blank'><FontAwesomeIcon className='display-1' icon={faFacebook} /></a>
                            <a href='https://www.youtube.com/channel/UC1LrbDxSW734rgbE-7XSY1A' target='blank'><FontAwesomeIcon className='display-1' icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="proudMemberSection-wrapper p-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h2>PROUD MEMBERS OF</h2>
                    </div>
                    <div className="col-md-8 proudParent">
                        <div className="proudImgDiv">
                            <img className='proudImg' src={I1} alt="" />
                        </div>
                        <div className="proudImgDiv">
                            <img className='proudImg' src={I2} alt="" />
                        </div>
                        <div className="proudImgDiv">
                            <img className='proudImg' src={I3} alt="" />
                        </div>
                        <div className="proudImgDiv">
                            <img className='proudImg' src={I4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SocialMedia