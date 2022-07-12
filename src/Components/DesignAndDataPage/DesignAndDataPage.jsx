import './DesignAndDataPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import DesignData from './DesignDataContent/DesignData'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import Banner2 from '../Banner2/Banner2'

function DesignAndDataPage() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>DESIGN AND DATA SERVICES</b></h1>
            </div>
        </div>
        <DesignData />
        <Banner2 />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default DesignAndDataPage