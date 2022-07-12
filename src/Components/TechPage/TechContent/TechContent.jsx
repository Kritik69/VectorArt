import React from 'react'
import TechImg from './../../MediaFiles/TechImg.jpg'

function TechContent() {
  return (
    <>
        <div className="tech-wrapper p-5">
            <div className="container">
                <div className="row align-items-center">
                    <h4 className='text-center text-black'>OUR INDUSTRY-READY SOLUTIONS ARE DESIGNED TO GIVE YOUR BUSINESS THE ADVANTAGE. WE OFFER PROGRESSIVE END-TO-END SOLUTIONS, BLENDING OUR SOLID BUSINESS DOMAIN EXPERIENCE, TECHNICAL EXPERTISE, PROFOUND KNOWLEDGE OF LATEST INDUSTRY TRENDS AND QUALITY-DRIVEN DELIVERY MODEL.</h4>
                    <div className="col-md-6">
                        <img className='editImg' src={TechImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    - WEBSITE DEVELOPMENT
                                </button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Vector Art provide end-to-end web development solutions and functionalities that meet your business objectives, goals and expectations.</p>
                                    <p>we have created lot of websites and web applications. Our aim was to keep long-term customer relationship based commitment to create best website designs. We have the best and creative web designers team they can handle any kind of website requirements. We here make you realize the difference of choosing us.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    - ECOMMERCE
                                </button>
                            </h4>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>E – Commerce essentially refers to trading in products or services using computer networks, such as the Internet. Electronic commerce draws on technologies such as mobile commerce, internet marketing, online transaction processing, buying & selling on websites etc.</p>
                                    <p>we provide our clients the ultimate E-commerce platform to ensure easy access, guaranteed success and long term profits for their brand. Ecommerce is simple to understand and easy to use. Prospective buyers can view the merchandize/services on your website and accordingly go ahead with purchase of the same. This also enables complete customer satisfaction and hassle free payments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    - MOBILE APP DEVELOPMENT
                                </button>
                            </h4>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Our mobile application developers have deep expertise creating apps for all the major platforms including iOS (iPhone, iPad), Android, BlackBerry and Windows Mobile.
                                    Experts to help with a certain aspect of your project such as business analysis, custom UX/UI design, code development, project management and/or quality assurance, or looking for a complete end-to-end or mobile app development solution to be delivered. we can meet your needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    - DIGITAL MAEKETING
                                </button>
                            </h4>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Vector Art can help you develop better interactions, build better experiences and leverage customer relationships across all digital channels, through a combination of brand planning, technology, in-depth analysis and path-breaking innovation.</p>
                                    <p>Through measurable, actionable, and on target strategies, vector art help’s your brand where it needs to be.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    - SOCIAL MEDIA
                                </button>
                            </h4>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Vector Art expertise in digital strategy with innovative tools and metrics, we develop and implement innovative social media strategies for maximum business relevance and impact.</p>
                                    <p>We can help you build honest, engaging and meaningful conversations, encourage participation and create sustained relationships and advocacy. We help you talk with, and be talked about by your customers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    - ERP & CRM
                                </button>
                            </h4>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>At Vector Art we provide our client with Fully integrated suite of tools to manage your business from small to medium sized enterprises.</p>
                                    <p>Our solutions allows you to put your business on complete automation manage any of the following front-office and back-office activities</p>
                                    <p>Our solutions offer a fully integrated suite of tools to manage your business.</p>
                                    <ul>
                                        <li>Sales and Marketing</li>
                                        <li>Manufacturing</li>
                                        <li>Purchasing</li>
                                        <li>Project Management</li>
                                        <li>Inventory & Warehouse</li>
                                        <li>Human Resources</li>
                                        <li>Event & Project Management</li>
                                        <li>Accounting & More</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TechContent