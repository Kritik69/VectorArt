import './OffShorePage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import Banner2 from '../Banner2/Banner2'
import OffShore from './OffShore/OffShore'

function OffShorePage() {
  return (
    <>
        <NavBar />
        <div className="offshore-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>OFFSHORE DEVELOPMENT CENTER</b></h1>
            </div>
        </div>
        <OffShore />
        <Banner2 />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default OffShorePage