import './ERPPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
import ERPContent from './ERPContent/ERPContent'
import Banner2 from '../Banner2/Banner2'

function ERPPage() {
  return (
    <>
        <NavBar />
        <div className="erp-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>ERP & ORDER MANAGEMENT</b></h1>
            </div>
        </div>
        <ERPContent />
        <Banner2 />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default ERPPage