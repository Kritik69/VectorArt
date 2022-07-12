import './ConsultPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import Banner2 from '../Banner2/Banner2'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'

function ConsultPage() {
  return (
    <>
        <NavBar />
        <div className="consult-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>CONSULTING</b></h1>
            </div>
        </div>
        <div className="consulting-wrapper pt-5 pb-5">
            <div className="container">
                <h2>IN BRIEF</h2>
                <p className="text-grey">Finding a right partner who understands your business operations and the technology together is always a key challenge.</p>
                <p className="text-grey">Vector Art consultants work with you not only to make informed technology decisions but also help you gear up with correct technology information based on your business processes that help you work with existing or new technology implementation of your choice. The key match of Promotional Industry knowledge and variety of technology expertise makes AWS a consulting partner of choice for most businesses, especially promotional suppliers.</p>
                <h4>Vector Art Advantage:</h4>
                <ul>
                    <li>Experienced Technology Professionals.</li>
                    <li>Knowledge of Promotional Industry.</li>
                    <li>Wide expertise areas.</li>
                </ul>
                <h4>Services offered:</h4>
                <ul>
                    <li>Existing technology evaluation: Get more out of your existing setup or know if they are well past their use by date.</li>
                    <li>Cross estimation: Get a competitive estimation for the amount of work required.</li>
                    <li>Project Management: Oversee your vendors or in house employees to efficiently manage project with best practices in technology.</li>
                    <li>Vendor Engagement and short listing: Know pros and cons for each vendor and know what they are really promising.</li>
                    <li>Requirement definition: Take the first step towards on time within budget software implementation and provide your vendor with detailed requirements and structured RFQ.</li>
                </ul>
            </div>
        </div>
        <Banner2 />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default ConsultPage