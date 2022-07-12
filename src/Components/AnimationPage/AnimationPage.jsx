import './AnimationPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import Animation from './AnimationContent/Animation'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'

function AnimationPage() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>ANIMATIONS</b></h1>
            </div>
        </div>
        <Animation />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default AnimationPage