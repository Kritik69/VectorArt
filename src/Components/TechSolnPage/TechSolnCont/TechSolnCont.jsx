import './TechSolnCont.css'
import React from 'react'
import r1 from './../../MediaFiles/redirection/r1.jpg'
import r2 from './../../MediaFiles/redirection/r2.jpg'
import r3 from './../../MediaFiles/redirection/r3.jpg'
import r4 from './../../MediaFiles/redirection/r4.jpg'

function TechSolnCont() {
  return (
    <>
        <div className="techCont1-wrapper pt-5 pb-5">
            <div className="container">
                <h4 className='text-center'>YOUR WORLD IS CHANGING FAST. VECTOR ART TECHNOLOGY SOLUTIONS KEEP YOU ON THE FAST TRACK.</h4>
                <p className='text-center'>What challenges and opportunities does technology help solve for promotional Suppliers? Which investments in technology will make a positive impact on the balance sheet? We start by helping you answer these questions. Here are the key decision points:</p>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <h2>ON THE CUSTOMER FACING SIDE</h2>
                        <p><b>How do you become a successful digital business? The imperatives are urgent and many:</b></p>
                        <ul>
                            <li>How do you move beyond transactions to digital relationships where you treat web visitors as individuals?</li>
                            <li>How do you provide genuinely engaging user experiences across web, mobile, social and digital for the increasingly digitalized distributor?</li>
                            <li>Integrating new media with traditional marketing to create and manage synchronized campaigns at scale and speed is a growing need.</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2>ON THE OPERATING SIDE OF THE BUSINESS</h2>
                        <p><b>There are challenges of efficiency, information and automation.</b></p>
                        <ul>
                            <li>How do you accelerate the click to cash cycle?</li>
                            <li>How do you reach critical information in real time across the company and to partners?</li>
                            <li>Generating the right insights from reports and analytics is vital to making important business decisions.</li>
                        </ul>
                    </div>
                </div>
                <p><b>Vector Art is a mature technology partner to promotional suppliers. One that has the people, processes and platforms to ensure genuine results through fit for purpose systems. Our service and product suite helps you address today’s challenges and opportunities and to anticipate and be ready for inevitable changes. Our role is to help translate your strategic intent into functional solutions, rapidly, affordably and measurably.</b></p>
            </div>
        </div>
        <div className="techCont2-wrapper pt-5 pb-5">
            <div className="container">
                <h1 className='text-center'>EXPLORE OUR CAPABILITIES AND PRODUCTS</h1>
                <p>Today, suppliers are faced with challenges when determining how to meet continuously emerging technology requirements arising from business processes. Be it tracking sales, production time or cutting down time spent on the data entry, technology solutions remain at the core of providing definitive answers to your challenges.</p>
                <p>Our technology solutions provide the right mix of functional industry readiness coupled with robust platforms that derive the real ROI for you.</p>
                <p>Our ERP, Order Management, Offshore development, Application integration, Automation and Consulting services arm you and your people with the information and tools you need to be in complete control and boost productivity.</p>
                <div class="grid-container2">
                    <div class="grid-item">
                        <div className="redirectionDiv">
                            <img className='redirectionImg' src={r1} alt="" />
                            <button className='btn-danger'>ERP & Order Management</button>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="redirectionDiv">
                            <img className='redirectionImg' src={r2} alt="" />
                            <button className='btn-danger'>Offshore Development Center</button>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="redirectionDiv">
                            <img className='redirectionImg' src={r3} alt="" />
                            <button className='btn-danger'>Consulting</button>
                        </div>
                    </div>  
                    <div class="grid-item">
                        <div className="redirectionDiv">
                            <img className='redirectionImg' src={r4} alt="" />
                            <button className='btn-danger'>Maintenance, Upgrades & Enhancements</button>
                        </div>    
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default TechSolnCont