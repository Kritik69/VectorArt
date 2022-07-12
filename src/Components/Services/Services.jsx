import React from 'react'
import './Services.css'
import technologyImg from './../MediaFiles/technologyImg.PNG'
import digitizingImg from './../MediaFiles/digitizingImg.PNG'
import graphicImg from './../MediaFiles/graphicImg.PNG'
import uxImg from './../MediaFiles/uxImg.PNG'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
    <div className="services-wrapper">
      <div className="container">
        <div className="headingSection text-center text-white">
          <h1 className='display-5'>SERVICES</h1>
        </div>
      </div>
    </div>
    <div className='servicesContent-wrapper'>
      <div className="container">
        <div className="row">
          <div className="leftSection col-md-6">
            <div className="technology">
              <div className="imgDiv">
                <Link to='/technology'><img className='servicesImg' src={technologyImg} alt='' /></Link>
              </div>
              <h1>TECHNOLOGY</h1>
              <p>With our strong team of developer we provide you with a one stop solution so that you have error-free loading pages and a flexible web structure to support an expanding business.</p>
              <Link to='/technology'><button className='btns'>
                Read More
              </button></Link>
            </div>
            <div className="technology">
              <div className="imgDiv">
                <Link to='/digitizing'><img className='servicesImg' src={digitizingImg} alt='' /></Link>
              </div>
              <h1>DIGITIZING</h1>
              <p>We specializes in digitizing your logo, graphics and designs in formats that are ready-to-use by any embroidery machine computer in multiple different formats as per your need.</p>
              <Link to='/digitizing'><button className='btns'>
                Read More
              </button></Link>
            </div>
          </div>
          <div className="rightSection col-md-6">
          <div className="technology">
              <div className="imgDiv">
                <Link to='/imageediting'><img className='servicesImg' src={uxImg} alt='' /></Link>
              </div>
              <h1>IMAGE EDITING</h1>
              <p>We offers our experience and expertise right upto the final image editing stage so that the photographs are ready for re-prints and end use.</p>
              <Link to='/imageediting'><button className='btns'>
                Read More
              </button></Link>
            </div>
            <div className="technology">
              <div className="imgDiv">
                <Link to='graphic'><img className='servicesImg' src={graphicImg} alt='' /></Link>
              </div>
              <h1>GRAPHIC DESIGNING</h1>
              <p>Graphic Art is at the heart of the promotional products industry with years of experience, our team of specialists ensures unmatched efficiency and speed in delivering razor sharp artworks.</p>
              <Link to='graphic'><button className='btns'>
                Read More
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services