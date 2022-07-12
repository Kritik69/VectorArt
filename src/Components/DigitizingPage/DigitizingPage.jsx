import React from 'react'
import './DigitizingPage.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import DigitizingContent from './DigitizingContent/DigitizingContent'
import SocialMedia from '../SocialMedia/SocialMedia'

function DigitizingPage() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>DIGITIZING</b></h1>
            </div>
        </div>
        <DigitizingContent />
        <SocialMedia />
        
        <Footer />
    </>
  )
}

export default DigitizingPage;