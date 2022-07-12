import './PortfolioPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import Portfolio from '../Portfolio/Portfolio'

function PortfolioPage() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>PORTFOLIO</b></h1>
            </div>
        </div>
        <Portfolio />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default PortfolioPage