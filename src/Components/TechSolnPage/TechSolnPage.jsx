import './TechSolnPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import TechSolnCont from './TechSolnCont/TechSolnCont'

function TechSolnPage() {
  return (
    <>
        <NavBar />
        <div className="techSols-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>TECHNOLOGY SOLUTIONS</b></h1>
            </div>
        </div>
        <TechSolnCont />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default TechSolnPage