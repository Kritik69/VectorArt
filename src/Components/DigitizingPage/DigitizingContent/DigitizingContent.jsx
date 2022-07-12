import React from 'react'
import './DigitizingContent.css'
import DigiImg from './../../MediaFiles/digiContentImg.jpg'

function DigitizingContent() {
  return (
    <>
        <div className="digiContent-wrapper p-5">
            <div className="container text-left">
                <h3>VECTORART DIGITIZING IS YOUR ONE-STOP CONTRACT DIGITIZING SOLUTION FOR ALL OF YOUR EMBROIDERY DIGITIZING NEEDS.</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img className='digiImg' src={DigiImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p className='digiText'>We convert your scanned images (.jpg, .png, .bmp, .tif) into a machine ready embroidery file like .DST or .EMB formats.
                        Our award-wining digitizers all work in our Vector Art Office and we strive to create a personal relationship with our clients so that you do not feel like just a number signing up with an online company. Our many years of experience combined with our stringent work process ensures that you receive a machine-ready design every time. We focus on limiting knots and thread breaks to make your embroidery machines run more efficiently. Test us out and you will see why we have worked with some of the biggest names in the embroidery business for so many years. We value every customer and ensure that your experience at Vectorart Digitizing will be pleasant as we take the same personal approach with every embroidery company no matter how big or small. Vectorart Digitizing can provide for all your digitizing from left chest corporate logos to the largest custom applications.</p>
                        <p className='digiText'>We offer below Digitizing Services:</p>
                        <ul>
                            <li className='li'>Quality Digitizing</li>
                            <li className='li'>Dynamic Designs</li>
                            <li className='li'>Minimal Trims</li>
                            <li className='li'>Efficient Sewing</li>
                            <li className='li'>Low Travel Times</li>
                            <li className='li'>Consistent Digitizing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DigitizingContent