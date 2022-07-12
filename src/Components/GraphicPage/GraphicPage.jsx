import React from 'react'
import './GraphicPage.css'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import GraphicContent from './GraphicContent/GraphicContent'

function GraphicPage() {
  return (
    <>
        <NavBar />
        <div className="graphic-wrapper p-5">
            <div className="container text-white text-left">
            <h1><b>GRAPHIC DESIGNING</b></h1>
            </div>
        </div>
        <GraphicContent />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default GraphicPage