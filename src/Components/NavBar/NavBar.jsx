import './NavBar.css'
import React from 'react'
import NavBarImg from '../MediaFiles/NavBarImg.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link to='/' className="nav-link active" aria-current="page" ><img src={NavBarImg} alt=''/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link to='/aboutus' className="nav-link active" aria-current="page" ><button className="dropbtn">ABOUT US</button></Link>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                        <button className="dropbtn">SERVICES</button>
                            <div className="dropdown-content">
                                <Link to='/digitizing'>DIGITIZING</Link>
                                <Link to='/graphic'>GRAPHIC DESIGN</Link>
                                <Link to='/imageediting'>IMAGE EDITING</Link>
                                <Link to='/technology'>TECHNOLOGY</Link>
                                <Link to='/artandorder'>ART & ORDER MANAGEMENT</Link>
                                <Link to='/designanddata'>DESIGN & DATA SERVICES</Link>
                                <Link to='/digitalmarketing'>DIGITAL MARKETING</Link>
                                <Link to='/animation'>ANIMATION</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to='/portfolio' className="nav-link active" aria-current="page"><button className="dropbtn">PORTFOLIO</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/examplesandplans' className="nav-link active" aria-current="page"><button className="dropbtn">EXAMPLE & PLANS</button></Link>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                        <button className="dropbtn">SOLUTIONS</button>
                            <div className="dropdown-content">
                                <Link to='/promo'>PROMO VIRTUALS</Link>
                                <Link to='/technologysolutions'>TECHNOLOGY SOLUTIONS</Link>
                                <Link to='/erp'>ERP & ORDER MANAGEMENT</Link>
                                <Link to='/offshore'>OFFSHORE DEVELOPMENT CENTER</Link>
                                <Link to='/consulting'>CONSULTING</Link>
                                <Link to='/maintenance'>MAINTENANCE & UPGRADES</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-link active" aria-current="page" ><button className="dropbtn">CONTACT</button></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default NavBar

