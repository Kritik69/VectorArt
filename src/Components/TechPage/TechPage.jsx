import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import TechContent from './TechContent/TechContent'
import './TechPage.css'

function TechPage() {
  return (
    <>
        <NavBar />
        <div className="image-wrapper p-5">
            <div className="container text-white text-left">
            <h1><b>TECHNOLOGY</b></h1>
            </div>
        </div>
        <TechContent />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default TechPage