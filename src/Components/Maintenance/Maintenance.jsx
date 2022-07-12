import './Maintenance.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import Banner2 from '../Banner2/Banner2'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'

function Maintenance() {
  return (
    <>
        <NavBar />
        <div className="maintenance-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>MAINTENANCE & UPGRADES</b></h1>
            </div>
        </div>
        <div className="consulting-wrapper pt-5 pb-5">
            <div className="container">
                <h2>IN BRIEF</h2>
                <p className="text-grey">Get the most out of your existing systems and run them at their full potential with our maintenance and upgrade services.</p>
                <p className="text-grey">Using multiple systems? Do not want to re-invest in a larger unified system?</p>
                <p className="text-grey">Our application integration service is the right choice of services that ensure communication of data between two or more discrete systems to achieve the desired result.</p>
                <p className="text-grey">Our technology experts geared with the right knowledge of integrating platforms and protocols ensure seamless integration making business process hassle free.</p>
                <p className="text-grey">From automating document generation to automated data population our industry and technology experts work with you to streamline your business with technology based automation.</p>
                <h4>Services:</h4>
                <ul>
                    <li className="text-grey">Technical Support</li>
                    <li className="text-grey">Application Integration</li>
                    <li className="text-grey">Business Process Automation.</li>
                    <li className="text-grey">Version upgrades</li>
                </ul>
                <h4>Key Solutions provided to customer</h4>
                <ul>
                    <li className="text-grey">Inventory Status: Display and provide estimation of inventory on website.</li>
                    <li className="text-grey">Simplified Interfaces: Simple interfaces for production of labor to update order status and inventory consumption.</li>
                    <li className="text-grey">Automated Artwork tagging: Automatically tagging of art and order based on business rules.</li>
                    <li className="text-grey">Order Posting: Automatically post orders from website to accounting applications.</li>
                    <li className="text-grey">Order Status: Display and update order status on the website.</li>
                    <li className="text-grey">Online Proof Approval: Integrate online proof approval with order management system.</li>
                    <li className="text-grey">System version upgrade: Upgrades to newer system version for better productivity and processing.</li>
                </ul>
            </div>
        </div>
        <Banner2 />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default Maintenance