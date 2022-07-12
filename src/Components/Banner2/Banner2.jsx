import './Banner2.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Banner2() {
  return (
    <>
        <div className="banner2-wrapper p-5">
            <div className="container text-center text-white">
                <h2>In depth Promotional Products Industry understanding. 5 years of Experience. One focus: Your Success.</h2>
                <div><p className="display-3"> Kick Start your project. </p><Link to='contact'><button className='b2Btn text-white'>Contact Us</button></Link></div>
            </div>
        </div>
    </>
  )
}

export default Banner2