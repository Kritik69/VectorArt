import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia';
import EditingContent from './EditingContent/EditingContent';
import './ImagePage.css'

function ImagePage() {
  return (
    <>
        <NavBar />
        <div className="image-wrapper p-5">
            <div className="container text-white text-left">
            <h1><b>IMAGE EDITING</b></h1>
            </div>
        </div>
        <EditingContent />
        <SocialMedia />
        <Footer />
    </>
  )
}

export default ImagePage;