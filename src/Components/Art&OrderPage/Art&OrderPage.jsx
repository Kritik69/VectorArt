import React from 'react'
import Art from './Art&Order/Art';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia';

function ArtandOrderPage() {
  return (
    <>
        <NavBar />
        <div className="image-wrapper p-5">
            <div className="container text-white text-left">
            <h1><b>ART & ORDER MANAGEMENT</b></h1>
            </div>
        </div>
        <Art />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default ArtandOrderPage