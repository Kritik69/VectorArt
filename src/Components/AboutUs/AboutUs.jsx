import './AboutUs.css';
import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import AfterImg from './../MediaFiles/AfterImg.png';
import BeforeImg from './../MediaFiles/BeforeImg.png';

function AboutUs() {
  return (
    <>
    <div className="aboutUsWrapper p-5">
        <div className="container">
            <div className="contentSection row">
                <div className="col-md-6">
                    <h1>ABOUT US</h1>
                    <p><b>When it comes to experience and quality, no provider of vector artwork and image editing can compare to Vector Art.</b></p>
                    <p>We have spent years perfecting our artist training and provide these services to some of the largest and best-known suppliers and distributors in the promotional products industry.</p>
                    <p>Vector art is a multi-national Graphics and digital imaging services company. We work with global leaders as well as growing companies to help achieve significant value addition and cost reduction to their graphic design, image production and management operations. We’re a group of forward thinking creatives with a passion for design and usability. We truly love what we do and love working with clients who are as enthusiastic about their business as we are about design.we offer a wide range of custom graphic design services, and ably translate your thoughts and ideas into creative graphic designs that bring out superior results. We ensure that our creativity is not run-of-the-mill, but stresses on creating custom graphics that work to your advantage. We ensure cost-effective service, accountability and flexibility in all your requirements. Whatever your budget may be, we have solutions you will not find elsewhere.</p>
                </div>
                <div className="col-md-6">
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={AfterImg} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={BeforeImg} alt="Image two" />}
                        />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs