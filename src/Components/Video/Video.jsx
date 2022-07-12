import React from 'react'
import './Video.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Video() {
  return (
    <div className="videoSection-wrapper">
        <div className="container">
            <div className="row rowVideo">
                <div className="reviewSection col-md-6">
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
                        <div className="feedbackDiv">
                            <h4 className='text-danger'>STEVE CAPANO</h4>
                            <p className='text-danger'>Director-Theaugustagroup</p>
                            <h2 className='review'>Super quality & fast Turn around time awesome file of Digitizer at great price</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="feedbackDiv">
                            <h4 className='text-danger'>JAMES MCIVER</h4>
                            <p className='text-danger'>Account Executive - Inproma, LLC</p>
                            <h2 className='review'>Amazing Art work with the speed in which we now turn around artwork.</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="feedbackDiv">
                            <h4 className='text-danger'>JAMES KINDLE</h4>
                            <p className='text-danger'>CEO Graphics USA</p>
                            <h2 className='review'>We are extremely happy with their services and rely on them as part of our team to provide the best service to our clients.</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
                <div className="videoSection col-md-6">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/o5GR5_DmFS0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video