import './OffShore.css'
import React from 'react'
import o1 from './../../MediaFiles/offshore/o1.jpg'
import o2 from './../../MediaFiles/offshore/o2.jpg'
import o3 from './../../MediaFiles/offshore/o3.jpg'
import o4 from './../../MediaFiles/offshore/o4.jpg'
import o5 from './../../MediaFiles/offshore/o5.png'

function OffShore() {
  return (
    <>
        <div className="offshorecontent-wrapper pt-5 pb-5">
            <div className="container">
                <h2 className="text-left">IN BRIEF</h2>
                <p className='text-grey'>We provide an offshore development center based in Mumbai, India – just so you get the best of the resource pool of qualified and experienced professionals, infrastructure, and timely executed work.</p>
                <p className="text-grey">Most of our customers leverage their partnership and build relationships with us by utilizing our offshore dedicated software development center that extends its IT expertise and efficiency to its clients keeping everything cost effective.</p>
                <p className="text-grey">Opting for this arrangement helps you save on two important costs: infrastructure and hiring staff. The AWS team on contract to you works exclusively on your projects, and directly reports to you as well. In effect, you would be managing your project with complete control over the Full Time Equivalent (FTE) resources, as if they were at your own office. This also helps you tackle urgent and time-sensitive projects in a much more efficient manner.</p>
                <h1 className="pt-5 text-center">OUR EXPERTISE</h1>
                <div className="row row1 mt-5">
                    <div className="card cards">
                        <img className="card-img-top" src={o1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text text-grey">Our .NET employees have over 5 years average experience in web/software development for Promotional suppliers and distributors. Our team has developed a number of complex and large-size .NET applications. We guarantee and commit to provide top quality and highly secured solutions in our service.</p>
                        </div>
                    </div>
                    <div className="card cards">
                        <img className="card-img-top" src={o2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text text-grey">Our Java developers have an average of 5 years experience out of which typically 1-2 years is in the handheld/mobile space. We can assist you in enhancing your current web/software/mobile systems or help you develop new solutions catered to your needs.</p>
                        </div>
                    </div>
                    <div className="card cards">
                        <img className="card-img-top" src={o3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text text-grey">With experience in Dynamics AX & NAV both on the functional and technical side, we can help you in supporting your existing ERP or providing enhancement/implementation solutions for a completely new system based on Dynamics AX or NAV.</p>
                        </div>
                    </div>
                    <div className="card cards">
                        <img className="card-img-top" src={o4} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text text-grey">Our expert PHP programmers cater to your specific need using the perfection combination of PHP tools and features that give the website every edge and touch for accelerated performance and hi-end navigation experience.</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-left mt-5">SOFTWARE DEVELOPMENT SKILLS</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img className='offShoreImg' src={o5} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h4>LANGUAGES</h4>
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>JAVA</li>
                                        <li>C#</li>
                                        <li>VB.NET</li>
                                        <li>Coldfusion</li>
                                        <li>VBScript</li>
                                        <li>Java</li>
                                        <li>JSP</li>
                                        <li>PL/SQL</li>
                                        <li>HTML/DHTML/XML</li>
                                        <li>PHP</li>
                                        <li>Action Scripting</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h4>LIBRARIES</h4>
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>AJAX</li>
                                        <li>OLEDB/ADO</li>
                                        <li>Win API</li>
                                        <li>J2EE</li>
                                        <li>JDK</li>
                                        <li>SWING</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h4>TECHNOLOGIES</h4>
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>COM/DCOm</li>
                                        <li>COM+</li>
                                        <li>ASP</li>
                                        <li>COBRA</li>
                                        <li>EJB</li>
                                        <li>JSP/SERVLETS</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    <h4>APPLICATION SERVERS</h4>
                                </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>MTS</li>
                                        <li>MS IIS</li>
                                        <li>Apache</li>
                                        <li>.NET Framework</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    <h4>DATABASE SERVERS</h4>
                                </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Oracle</li>
                                        <li>MS SQL Server</li>
                                        <li>MS Access</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    <h4>TOOLS</h4>
                                </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Visual Studio</li>
                                        <li>VSS</li>
                                    </ul>
                                </div>
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

export default OffShore