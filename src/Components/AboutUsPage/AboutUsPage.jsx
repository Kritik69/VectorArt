import React from 'react'
import './AboutUsPage.css'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import BannerImg from './../MediaFiles/aboutusbanner.jpg'
import VectorAfter from './../MediaFiles/VectorAfter.jpg'
import RasterBefore from './../MediaFiles/RasterBefore.jpg'
import SocialMedia from '../SocialMedia/SocialMedia';

function AboutUsPage() {

  return (
    <>
        <NavBar />
        <div className='image-item1' style={{backgroundImage: `url(${BannerImg})` }}>
            <div className="content container">
                <h1 className='text-white display-1'><b>ABOUT US</b></h1>
            </div>
        </div>
        <div className="aboutUsWrapper p-5">
            <div className="container">
                <div className="contentSection row">
                    <div className="col-md-6">
                        <h1>WHO ARE WE</h1>
                        <p><b>When it comes to experience and quality, no provider of vector artwork and image editing can compare to Vector Art.</b></p>
                        <p>We have spent years perfecting our artist training and provide these services to some of the largest and best-known suppliers and distributors in the promotional products industry.</p>
                        <p>Vector art is a multi-national Graphics and digital imaging services company. We work with global leaders as well as growing companies to help achieve significant value addition and cost reduction to their graphic design, image production and management operations. We’re a group of forward thinking creatives with a passion for design and usability. We truly love what we do and love working with clients who are as enthusiastic about their business as we are about design.we offer a wide range of custom graphic design services, and ably translate your thoughts and ideas into creative graphic designs that bring out superior results. We ensure that our creativity is not run-of-the-mill, but stresses on creating custom graphics that work to your advantage. We ensure cost-effective service, accountability and flexibility in all your requirements. Whatever your budget may be, we have solutions you will not find elsewhere.</p>
                    </div>
                    <div className="col-md-6">
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={VectorAfter} alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src={RasterBefore} alt="Image two" />}
                            />
                    </div>
                </div>
            </div>
        </div>
        <div className="video-Section-wrapper p-5">
            <div className="container">
                <div className="row rowVideo">
                <div className="videoSection col-md-6">
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/o5GR5_DmFS0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="review-Section col-md-6">
                        <h2>WHAT WE DO</h2>
                        <p>We convert any low resolutions JPGs, Bitmaps, PDFs, Logos, Artworks, Illustrations, Maps, Signs, Crests, Badges, Decals, Patches, Paintings, Photographs, Caricatures and Cartoons to camera-ready artwork. All your images are hand drawn and convert in to high quality vector files by our experienced designer using Adobe illustrator or Corel draw.</p>
                        <button className='toServicesBtn'>SERVICES</button>
                        <h2>BENEFITS TO WORK WITH VECTOR ART TEAM</h2>
                        <ul>
                            <li>Rates begin as low as $14</li>
                            <li>Next business day standard turnaround time</li>
                            <li>RUSH order Same-day service available</li>
                            <li>Easy online proofing system</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <SocialMedia />
        <Footer />
      
    </>
  )
}

export default AboutUsPage;