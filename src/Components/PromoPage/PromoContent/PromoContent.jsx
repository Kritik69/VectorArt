import './PromoContent.css'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import p1 from './../../MediaFiles/promo/p1.jpg'
import p2 from './../../MediaFiles/promo/p2.jpg'
import p3 from './../../MediaFiles/promo/p3.jpg'
import p4 from './../../MediaFiles/promo/p4.jpg'
import p5 from './../../MediaFiles/promo/p5.jpg'
import p6 from './../../MediaFiles/promo/p6.jpg'
import p7 from './../../MediaFiles/promo/p7.jpg'
import p8 from './../../MediaFiles/promo/p8.jpg'
import p9 from './../../MediaFiles/promo/p9.jpg'
import p10 from './../../MediaFiles/promo/p10.jpg'
import p11 from './../../MediaFiles/promo/p11.jpg'
import p12 from './../../MediaFiles/promo/p12.jpg'
import p13 from './../../MediaFiles/promo/p13.jpg'
import p14 from './../../MediaFiles/promo/p14.jpg'
import p15 from './../../MediaFiles/promo/p15.jpg'
import p16 from './../../MediaFiles/promo/p16.jpg'
import p17 from './../../MediaFiles/promo/p17.jpg'
import p18 from './../../MediaFiles/promo/p18.jpg'
import f1 from './../../MediaFiles/features/f1.png'
import f2 from './../../MediaFiles/features/f2.png'
import f3 from './../../MediaFiles/features/f3.png'
import f4 from './../../MediaFiles/features/f4.png'
import f5 from './../../MediaFiles/features/f5.png'
import f6 from './../../MediaFiles/features/f6.png'
import f7 from './../../MediaFiles/features/f7.png'
import f8 from './../../MediaFiles/features/f8.png'

function PromoContent() {
  return (
    <>
        <div className="promoContent-wrapper pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-2 columns">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p4} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p5} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p6} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p7} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p8} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p9} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p10} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p11} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p12} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p13} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p14} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p15} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p16} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p17} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promoImgDiv">
                                <img className='promoImg' src={p18} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                    <div className="col-md-6 text-center p-2 columns">
                        <h2>“THE VIRTUAL WORLD WHICH WE PRESENT YOU WITH, MIRRORS THE PHYSICAL WORLD IN EVERY SINGLE WAY”</h2>
                        <p>Promo Virtual’s Virtual Samples truly bring out the uniqueness of each product and imprint method. We give utmost importance to authenticity.</p>
                        <p>Creating a virtual sample is not just about placing a logo on any product. Imprint rules, color rules, location rules and final</p>
                        <p>image quality are all to be considered before creating the perfect virtual sample. We have always strived for perfection and this is the reason why our clients deeply value our association.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-wrapper pt-5 pb-5">
            <div className="container text-center">
                <h1>FEATURES</h1>
                <div class="grid-container">
                    <div class="grid-item">
                        <div className="featuresDiv">
                            <img className='featureImg' src={f1} alt="" />
                            <h3>CONFIGURE IMPRINTS</h3>
                            <p>The imprint area and location is set up to match the supplier’s specifications. This ensures for the imprint displayed to be accurate.</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="featuresDiv">
                            <img className='featureImg' src={f2} alt="" />
                            <h3>DEFINE IMPRINT COLORS</h3>
                            <p>The supplier can define the imprint colors allowed for the products where color restrictions may apply.</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="featuresDiv">
                            <img className='featureImg' src={f3} alt="" />
                            <h3>SELECT IMPRINT METHOD</h3>
                            <p>Users can select their preferred imprint method from the choices defined by the supplier. The virtual proof will display results per method selected.</p>
                        </div>
                    </div>  
                    <div class="grid-item">
                        <div className="featuresDiv">
                            <img className='featureImg' src={f4} alt="" />
                            <h3>EASY TO SHARE</h3>
                            <p>Once a virtual proof is generated it can be emailed, saved and print.</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="featuresDiv">
                            <img className='featureImg' src={f5} alt="" />
                            <h3>EASY SETUP</h3>
                            <p>The tool captures supplier’s product data through a simple product data xls. upload and images through a zip upload.</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="featuresDiv">
                            <img className='featureImg' src={f6} alt="" />
                            <h3>EASY LINK TO WEBSITE</h3>
                            <p>The imprint area and location is set up to match the supplier’s specifications. This ensures for the imprint displayed to be accurate.</p>
                        </div>
                    </div>  
                    <div class="grid-item">
                        <div className="featuresDiv">
                            <img className='featureImg' src={f7} alt="" />
                            <h3>REMOVE WHITE BACKGROUND FROM THE LOGO</h3>
                            <p>This option isessential where the logo has a white background that should not be displayed.</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="featuresDiv">
                            <img className='featureImg' src={f8} alt="" />
                            <h3>ANY PLATFORM</h3>
                            <p>The tool works on PC, mac and tablets – IOS and ANDROID.</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default PromoContent