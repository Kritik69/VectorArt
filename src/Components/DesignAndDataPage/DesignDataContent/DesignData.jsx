import './DesignData.css'
import React from 'react'
import d1 from './../../MediaFiles/D1.jpg'
import d2 from './../../MediaFiles/D2.jpg'
import d3 from './../../MediaFiles/D3.jpg'
import d4 from './../../MediaFiles/D4.jpg'
import d5 from './../../MediaFiles/D5.jpg'

function DesignData() {
  return (
    <>
        <div className="design-wrapper p-5">
            <div className="container">
                <div className="brief text-left">
                    <h4>IN BRIEF</h4>
                    <p className='text-grey'>Distributor buying decisions are biased in favor of suppliers who quickly deliver highly accuracy data and visually appealing product images within the setting of a website, presentation or catalog. Developing comprehensive datasets and keeping them up-to-date consumes a lot of time and resources. As does the generation of great looking product images and user interfaces. Vector Art design and data services deliver every data, image and design output you need, relieve your teams of the time burdens and cost overheads, and ensure substantial savings. Our linked Design & Data Services help ensure that your distributors access and convert your product data to sales.</p>
                </div>
                <h1 className='display-4 text-center'><b>DATA SERVICES</b></h1>
                <ul className="nav nav-tabs justify-content-center mt-4" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="prod-info" data-bs-toggle="tab" data-bs-target="#product-info" type="button" role="tab" aria-controls="product-info" aria-selected="true">PRODUCT INFORMATION MANAGEMENT</button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link" id="prod-research" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">PRODUCT RESEARCH</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active p-1" id="product-info" role="tabpanel" aria-labelledby="prod-info">
                        <p className='text-grey'>Vector Art turnkey Product Information Management solutions are helping suppliers to focus on using data rather than managing it. Vector Art collates, organizes, refines and updates your product data quickly and accurately. Your catalogs, websites and partner sites always carry the right information and optimized images. We usually work in three steps:</p>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                        <strong className='text-red'>1. Collate data from multiple sources & formats</strong> <br />
                        <p className='text-grey'>We help you hunt and gather product information, photographs, images, old catalog dBs, Mac/Indesign/Corel files, .xls files, text files, jpegs, pdfs and pricing tables. Wherever it resides, we find it and compile it ready for the next stage.</p>
                        <strong className='text-red'>2. Organize the information as a structured asset</strong> <br />
                        <p className='text-grey'>A centralized database holds de-duplicated, up-to-date product information and retouched product images in the right sizes.You can now use it to drive your business. It can power all your customer-facing websites, catalogs and marketing material and it works with your order management and inventory systems at the back end.</p>
                        <strong className='text-red'>3. Enter data into databases & applications</strong> <br />
                        <p className='text-grey'>Your product information has to reach and work with multiple internal and external systems and destinations: industry portals, partner sites, distributor portals and more. We make sure it is everywhere it should be, in real time, accurate and doing business for you.</p>
                        </div>
                        <div className="col-md-6">
                        <div className="image-wrapper mb-3"><img className='img-fluid' src={d1} alt="PRODUCT INFO" /></div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="prod-research">
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                            <strong>Thorough, continuous research is at the core of successful online businesses.</strong><br />
                            <p className='text-grey'>And that’s exactly what we offer you. Our research team provides you with invaluable information on competitor products and pricing, buying trends, distributor behavior, ongoing campaigns and more, allowing you to position your product optimally for each customer group and to win business.</p>
                            <p className='text-grey'>Our research is powered by a team of expert researchers who can transform your online investments into measureable dollars.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="image-wrapper mb-3"><img className='img-fluid' src={d2} alt="WHO WE ARE" /></div>
                        </div>
                    </div>
                </div>
                </div>
                <h1 className='display-4 text-center'><b>DESIGN SERVICES</b></h1>
                <ul className="nav nav-tabs justify-content-center mt-4" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="cata-info" data-bs-toggle="tab" data-bs-target="#catalog" type="button" role="tab" aria-controls="catalog" aria-selected="true">CATALOG DESIGN AND PRODUCTION</button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link" id="img-editing" data-bs-toggle="tab" data-bs-target="#img-edit" type="button" role="tab" aria-controls="img-edit" aria-selected="false">IMAGE EDITING AND RELATED SERVICES</button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link" id="brochure" data-bs-toggle="tab" data-bs-target="#brochure-flyer" type="button" role="tab" aria-controls="brochure-flyer" aria-selected="false">BROCHURE AND FLYER DESIGN SERVICES</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active p-1" id="catalog" role="tabpanel" aria-labelledby="cata-info">
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                            <strong>Vector Art creates catalogs that synergize across web, digital, print and mobile platforms.</strong>
                            <p className='text-grey'>It’s a single window solution that has your catalogs ready for business within days. Your customers get a compelling and consistent experience. You realize greater returns from your catalog programs and save on time and money. The crux of our cross-media publishing solution is “Create Once, Publish and Monetize Multiple Times”.</p>
                            <strong>The promotional industry is becoming truly multi-channel.</strong>
                            <p className='text-grey'>A seamless experience across multiple mediums is vital to building distributor engagement. And that is the deliverable that we promise and keep in mind through our design, data and publishing phases for your catalogs.</p>
                            <strong>All you have to do is to provide us with the inputs you can.</strong>
                            <p className='text-grey'>We will help fill in the missing pieces through photography and data services. And if you want us to write copy for your products, our team of specialized copy writers will do just that.</p>
                        </div>
                        <div className="col-md-6">
                        <div className="image-wrapper mb-3"><img className='img-fluid' src={d3} alt="PRODUCT INFO" /></div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="img-edit" role="tabpanel" aria-labelledby="img-editing">
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                            <strong>Product Image Editing</strong>
                            <p className='text-grey'>We do it all. Remove backgrounds from product photographs, optimize images for the web, enhance/clean up product shots and more. On time, in budget.</p>
                            <strong>Clipping Path</strong>
                            <p className='text-grey'>Vector Art delivers fully hand drawn clipping paths and masks, even for complex shapes, so you get the highest quality product images ready for print.</p>
                            <strong>Product Templates/mockups</strong>
                            <p className='text-grey'>Let Vector Art handle all your one time or irregular studio work including getting product images ready for print and web, virtual samples and template creation.</p>
                            <strong>Dedicated Studio</strong>
                            <p className='text-grey'>Realize the full cost and service benefits of offshoring your production art, within days. We create and manage dedicated teams that work exclusively for you.</p>
                            <strong>On Demand Artwork</strong>
                            <p className='text-grey'>Back up your busy art studio. Let Vector Art’s 24/7 studio manage your overspills and emergencies. Our experienced team can meet all your needs across all formats.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="image-wrapper mb-3"><img className='img-fluid' src={d4} alt="WHO WE ARE" /></div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="brochure-flyer" role="tabpanel" aria-labelledby="brochure">
                    <div className="row align-items-center mt-4">
                        <div className="col-md-6">
                            <strong>PDF Brochures</strong>
                            <p className='text-grey'>Vector Art custom designs PDF brochures with seasonal or event-specific themes, ready to be downloaded from your websites. They are effective and low-cost.</p>
                            <strong>Flip Brochures</strong>
                            <p className='text-grey'>Flip ahead. Vector Art’s advanced flip technology gives your customers powerful search, bookmarking, commenting and email tools within a fast digital catalog format.</p>
                            <strong>Print Brochures</strong>
                            <p className='text-grey'>Vector Art designs corporate brochures with custom branded cover and products. Print them digitally and pitch existing and new corporate customers at low cost.</p>
                            <strong>Email Flyers</strong>
                            <p className='text-grey'>Vector Art’s innovatively designed flyers are optimized for email blasts and help you win business. Try us on demand or subscribe to our monthly service.</p>
                            <strong>PDF Flyers</strong>
                            <p className='text-grey'>Vector Art can create a range of custom designed PDF flyers for users to download from your website or for mailing/printing, made for Close Outs, Offers, New Products and more.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="image-wrapper mb-3"><img className='img-fluid' src={d5} alt="WHO WE ARE" /></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DesignData