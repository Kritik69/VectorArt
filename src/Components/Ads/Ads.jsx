import './Ads.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faCheckToSlot, faCoffee, faUsers } from '@fortawesome/free-solid-svg-icons'


function Ads() {
  return (
    <>
        <div className="ads-wrapper p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 align-items-center text-center">
                        <h1 className="text-danger">
                            <FontAwesomeIcon icon={faPerson} />
                        </h1>
                        <p className="display-4" style={{fontWeight:600}}>594</p>
                        <h2 style={{fontWeight:100}}>Happy Clients(B2B)</h2>
                    </div>
                    <div className="col-md-3 align-items-center text-center">
                        <h1 className="text-danger">
                            <FontAwesomeIcon icon={faCheckToSlot} />
                        </h1>
                        <p className="display-4" style={{fontWeight:600}}>721,860</p>
                        <h2 style={{fontWeight:100}}>Finished Projects</h2>
                    </div>
                    <div className="col-md-3 align-items-center text-center">
                        <h1 className="text-danger">
                            <FontAwesomeIcon icon={faCoffee} />
                        </h1>
                        <p className="display-4" style={{fontWeight:600}}>5400+</p>
                        <h2 style={{fontWeight:100}}>Cups of tea</h2>
                    </div>
                    <div className="col-md-3 align-items-center text-center">
                        <h1 className="text-danger">
                            <FontAwesomeIcon icon={faUsers} />
                        </h1>
                        <p className="display-4" style={{fontWeight:600}}>248</p>
                        <h2 style={{fontWeight:100}}>Happy Customers(B2C)</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ads