import './PromoPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import PromoContent from './PromoContent/PromoContent'

function PromoPage() {
  return (
    <>
        <NavBar />
        <div className="promo-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>DESIGN AND DATA SERVICES</b></h1>
            </div>
        </div>
        <PromoContent />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default PromoPage