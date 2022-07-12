import './ExampleContent.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faAirFreshener, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import ImgE1 from './../../MediaFiles/artandorderImg.jpg'
import ImgE2 from './../../MediaFiles/E1.jpg'
import ImgE3 from './../../MediaFiles/E2.jpg'
import ImgE4 from './../../MediaFiles/E3.jpg'
import ImgE5 from './../../MediaFiles/E4.jpg'

function ExampleContent() {
  return (
    <>
        <div className="exampleContent-wrapper p-5">
            <div className="container">
                <h2 className='text-center'>EXAMPLE AND PRICING</h2>
                <h2 className='text-center'>PUT OUR CREATIVE TEAM TO WORK FOR YOU</h2>
                <h5 className='text-center'>WE ARE A LEADING COMPREHENSIVE ARTWORK SERVICE PROVIDER.</h5>
                <p className='text-center'>Vector Art works closely with our clients to understand their requirements and offers professional quality design with storage services at ultra-competitive rates to assist you with all of your creative needs. Whether you need a new logo for your company or help creating an advertisement, Vector Art has got you covered.</p>
                <table class="table table-bordered table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Particular</th>
                        <th scope="col">Pricing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Virtual Sample</td>
                        <td>$2</td>
                        </tr>
                        <tr>
                        <td>Virtual Sample</td>
                        <td>$2</td>
                        </tr>
                        <tr>
                        <td>Vector Art - Simple</td>
                        <td>$5</td>
                        </tr>
                        <tr>
                        <td>Digitizing, Price per thousand</td>
                        <td>$1</td>
                        </tr>
                        <tr>
                        <td>Logo Design (2 options)</td>
                        <td>$50</td>
                        </tr>
                        <tr>
                        <td>Email Blast (3 versions) 1 options</td>
                        <td>$45</td>
                        </tr>
                        <tr>
                        <td>Branding Packages: Logo redeign, web banners, & Business card layout</td>
                        <td>$130</td>
                        </tr>
                        <tr>
                        <td>Vectorart – Standard</td>
                        <td>$20</td>
                        </tr>
                        <tr>
                        <td>Vectorart – Complex</td>
                        <td>$40</td>
                        </tr>
                        <tr>
                        <td>Vectorart – Speciality</td>
                        <td>$100</td>
                        </tr>
                        <tr>
                        <td>E-blast / Flyer / Banner</td>
                        <td>$20</td>
                        </tr>
                        <tr>
                        <td>Logo Design (1 options)</td>
                        <td>$30</td>
                        </tr>
                        <tr>
                        <td>T-shirt Design with virtual mockup</td>
                        <td>$35</td>
                        </tr>
                        <tr>
                        <td>Order Entry</td>
                        <td>$2</td>
                        </tr>
                        <tr>
                        <td>Line Art</td>
                        <td>$100</td>
                        </tr>
                        <tr>
                        <td>Line Art Simple</td>
                        <td>$50</td>
                        </tr>
                        <tr>
                        <td>Website Design – http://www.rftpromo.com (Example Site)</td>
                        <td>$400</td>
                        </tr>
                        <tr>
                        <td>Animation</td>
                        <td>Request a quote</td>
                        </tr>
                        <tr>
                        <td>Short Film Video</td>
                        <td>Request a quote</td>
                        </tr>
                        <tr>
                        <td>Short Video 2 mins – Store Launch or Product Video</td>
                        <td>Request a quote</td>
                        </tr>
                        <tr>
                        <td>Short Video (1-2-3 Mins) – Product Showcase with Wow factor</td>
                        <td>Request a quote</td>
                        </tr>
                        <tr>
                        <td>Maya</td>
                        <td>Request a quote</td>
                        </tr>
                        <tr>
                        <td>Catalog</td>
                        <td>Request a quote</td>
                        </tr>
                    </tbody>
                </table>
                <div className="row text-left mt-5">
                    <div className="col-md-4">
                        <h3><FontAwesomeIcon icon={faBasketShopping} /> BEST PRICE</h3>
                        <p>Pricing starting from $5 to suit your needs.</p>
                    </div>
                    <div className="col-md-4">
                        <h3><FontAwesomeIcon icon={faAirFreshener} /> DISCOUNTS OFFERS</h3>
                        <p>Offering a wide range of discounts for bulk orders. Our Plans</p>
                    </div>
                    <div className="col-md-4">
                        <h3><FontAwesomeIcon icon={faCheckDouble} /> OUR PLANS</h3>
                        <p>Intuitive Pricing based on client needs</p>
                    </div>
                </div>
                <ul className="nav nav-tabs justify-content-center mt-4" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active bg-dark text-white m-1" id="simple-jobs" data-bs-toggle="tab" data-bs-target="#simpleJobs" type="button" role="tab" aria-controls="simpleJobs" aria-selected="true"><h5>SIMPLE JOBS</h5></button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link bg-dark text-white m-1" id="standard-jobs" data-bs-toggle="tab" data-bs-target="#standard" type="button" role="tab" aria-controls="standard" aria-selected="false"><h5>STANDARD JOBS</h5></button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link bg-dark text-white m-1" id="complex-jobs" data-bs-toggle="tab" data-bs-target="#complexJobs" type="button" role="tab" aria-controls="complexJobs" aria-selected="false"><h5>COMPLEX JOBS</h5></button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link bg-dark text-white m-1" id="challenging-jobs" data-bs-toggle="tab" data-bs-target="#challengingJobs" type="button" role="tab" aria-controls="challengingJobs" aria-selected="false"><h5>CHALLENGING JOBS</h5></button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link bg-dark text-white m-1" id="speciality-jobs" data-bs-toggle="tab" data-bs-target="#specialityJobs" type="button" role="tab" aria-controls="specialityJobs" aria-selected="false"><h5>SPECIALITY JOBS</h5></button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active p-1" id="simpleJobs" role="tabpanel" aria-labelledby="simple-jobs">
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                            <div className="img-wrapper mb-3"><img className='img-fluid' src={ImgE1} alt="SIMPLE JOBS" /></div>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li className='li'>Color and/or text changes to existing vector files</li>
                                <li className='li'>Vectorization of simple logos (one image and no more than four words of text)</li>
                                <li className='li'>Files formatted in different versions and sizes</li>
                                <li className='li'>Virtual samples of logos on promotional items</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="standard" role="tabpanel" aria-labelledby="standard-jobs">
                    <div className="row align-items-center mt-4">
                    <div className="col-md-6">
                            <div className="img-wrapper mb-3"><img className='img-fluid' src={ImgE2} alt="SIMPLE JOBS" /></div>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li className='li'>Vectorization of more complex logos</li>
                                <li className='li'>Vectorization of simple logos (one image and no more than four words of text)</li>
                                <li className='li'>Files formatted in different versions and sizes</li>
                                <li className='li'>Virtual samples of logos on promotional items</li>
                                <button className='bg-danger text-white btn'>Simple Pricing -$10</button>
                                <button className='bg-danger text-white btn'>Priority Pricing -$19</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="complexJobs" role="tabpanel" aria-labelledby="complex-jobs">
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                            <div className="img-wrapper mb-3"><img className='img-fluid' src={ImgE3} alt="WHO WE ARE" /></div>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li className='li'>Creation of logo or design work from client’s instructions, including sketches, ideas, reference material, etc.</li>
                                <li className='li'>Vectorization of complicated logos (multiple images and/or difficult text)</li>
                                <li className='li'>Reproduction of gradients</li>
                                <button className='bg-danger text-white btn'>Simple Pricing -$24</button>
                                <button className='bg-danger text-white btn'>Priority Pricing -$36</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="challengingJobs" role="tabpanel" aria-labelledby="challenging-jobs">
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                            <div className="img-wrapper mb-3"><img className='img-fluid' src={ImgE4} alt="WHO WE ARE" /></div>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li className='li'>Vectorization of logo or design work containing illustrations, cartoons, etc.</li>
                                <li className='li'>Creation of simple marketing materials (single-sided flyers, business cards, etc.)</li>
                                <li className='li'>Fonts that must be recreated from scratch</li>
                                <li className='li'>Creation of simple illustrations from client’s sketch or reference material</li>
                                <button className='bg-danger text-white btn'>Simple Pricing -$48</button>
                                <button className='bg-danger text-white btn'>Priority Pricing -$69</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="specialityJobs" role="tabpanel" aria-labelledby="speciality-jobs">
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                            <div className="img-wrapper mb-3"><img className='img-fluid' src={ImgE5} alt="WHO WE ARE" /></div>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li className='li'>Creation of a new logo with up to three different options from the artist</li>
                                <li className='li'>Vectorization of complicated artwork (paintings, photographs, etc.)</li>
                                <li className='li'>Vectorization of logos or artwork with multiple challenging images</li>
                                <li className='li'>Creation of complex design work from client’s sketch or reference materials</li>
                                <button className='bg-danger text-white btn'>Simple Pricing -$65 and Plus</button>
                                <button className='bg-danger text-white btn'>Priority Pricing -Quote</button>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExampleContent