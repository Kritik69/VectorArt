import './ExamplePlanPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import ExampleContent from './ExampleContent/ExampleContent'

function ExamplePlanPage() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>EXAMPLES AND PLAN</b></h1>
            </div>
        </div>
        <ExampleContent />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default ExamplePlanPage