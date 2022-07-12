import React from 'react'
import './GraphicContent.css'
import g1 from './../../MediaFiles/graphic/g1.jpg'
import g2 from './../../MediaFiles/graphic/g2.jpg'
import g3 from './../../MediaFiles/graphic/g3.jpg'
import g4 from './../../MediaFiles/graphic/g4.jpg'
import a1 from './../../MediaFiles/A1.jpg'
import a2 from './../../MediaFiles/A2.jpg'
import a3 from './../../MediaFiles/A3.jpg'
import a4 from './../../MediaFiles/A4.jpg'
import a5 from './../../MediaFiles/A5.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function GraphicContent() {
  return (
    <>
        <div className="graphiccontent-wrapper p-5">
            <div className="container text-left">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h4>- RECREATION (RASTER TO VECTOR)</h4>
                            <hr />
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <div className="row">
                    <div className="col-md-6">
                        <p>Our illustrator wizards know how to transform your images into beautiful vector artworks. Each image is hand drawn or traced to obtain an illustrator vector file or a user predefined format. Once created, vectors can be scaled to any size without loss of quality.</p>
                    </div>
                    <div className="col-md-6">
                        <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='digiImg' src={g1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='digiImg' src={g2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='digiImg' src={g3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='digiImg' src={g4} alt="" />
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h4>- VIRTUAL SAMPLES</h4>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    Virtual sample used to show the uniqueness of product and imprint location. It will give some idea to customer how it will look before printing on the actual product.
                                </div>
                                <div className="col-md-6">
                                    <img src={a1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h4>- PAPER PROOFS</h4>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Paper Proofs nowadays clients are requesting for proofs before final printing. Our clear understanding of how the promotional products industry works has helped us deliver product mock-ups that exceed our clients’ expectations. Good design can help create a favorable impression that makes your company and its products stand out in the crowd.</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={a2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <h4>- BROCHURES AND FLYERS</h4>
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Brochures are a great way to promote your business! Brochure and flyer designing used for decades to highlight a new product or service. We create brochures/flyers that positively engage with your target audience.</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={a3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <h4>- E FLYER / NEWSLETTERS</h4>
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>E-Flyer design service creates a competently designed HTML email to send out your existing and new potential clients to promote your company and its products and services.</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={a4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <h4>- PACKAGING / LABELS</h4>
                    </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>When it comes to their product’s packaging design and the label stickers that come with it.</p>
                                </div>
                                <div className="col-md-6">
                                    <img className='graphicImg5' src={a5} alt="" />
                                </div>
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

export default GraphicContent