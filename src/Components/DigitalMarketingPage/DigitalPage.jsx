import './DigitalPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import DigiMark from './DigiMark/DigiMark'

function DigitalPage() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>DIGITAL MARKETING</b></h1>
            </div>
        </div>
        <DigiMark />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default DigitalPage