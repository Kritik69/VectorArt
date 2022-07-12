import './ERPContent.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faHeadphones, faGear, faDollar, faCheck, faSearch, faShoppingCart, faTag } from '@fortawesome/free-solid-svg-icons'

function ERPContent() {
  return (
    <>
        <div className="erpContent-wrapper pt-5 pb-5">
            <div className="container">
                <h1 className='text-center'>WYSWYG</h1>
                <div class="grid-container3">
                    <div class="grid-item3 text-center">
                        <FontAwesomeIcon className='display-1 text-danger' icon={faRocket} />
                        <h4>GO LIVE IN LESS THAN 180 DAYS</h4>
                    </div>
                    <div class="grid-item3">
                        <FontAwesomeIcon className='display-1 text-danger' icon={faHeadphones} />
                        <h4>EXTENSIVE POST LIVE SUPPORT</h4>
                    </div>
                    <div class="grid-item3">
                        <FontAwesomeIcon className='display-1 text-danger' icon={faGear} />
                        <h4>TRANSPARENT INVENTORY MANAGEMENT</h4>
                    </div>  
                    <div class="grid-item3">
                        <FontAwesomeIcon className='display-1 text-danger' icon={faDollar} />
                        <h4>EASE OF CASH FLOW MANAGEMENT</h4>
                    </div>
                    <div class="grid-item3">
                        <FontAwesomeIcon className='display-1 text-danger' icon={faCheck} />
                        <h4>INTEGRATION WITH PROMO STANDARDS</h4>
                    </div>
                    <div class="grid-item3">
                        <FontAwesomeIcon className='display-1 text-danger' icon={faSearch} />
                        <h4>MANAGEMENT DIFFERENT ORDER TYPES IN A GO</h4>    
                    </div>  
                    <div class="grid-item3">
                        <FontAwesomeIcon className='display-1 text-danger' icon={faShoppingCart} />
                        <h4>ARTWORK ONLINE PROOF APPROVAL</h4>
                    </div>
                    <div class="grid-item3">
                        <FontAwesomeIcon className='display-1 text-danger' icon={faTag} />
                        <h4>SPECIAL PRICING FOR DIFFERENT CUSTOMER GROUPS</h4>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default ERPContent