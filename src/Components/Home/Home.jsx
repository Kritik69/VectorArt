import AboutUs from '../AboutUs/AboutUs';
import Ads from '../Ads/Ads';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import SocialMedia from '../SocialMedia/SocialMedia';
import Video from '../Video/Video';

import React from 'react'

function Home() {
  return (
    <>
        <NavBar />
        <Banner />
        <AboutUs />
        <Services />
        <Video /> 
        <Portfolio />
        <Ads />
        <Banner2 />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default Home