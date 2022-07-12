import './Refund.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'

function Refund() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>REFUND & CANCELLATION POLICY</b></h1>
            </div>
        </div>
        <div className="refund-wrapper pt-5 pb-5">
            <div className="container">
                <p className="text-grey">Vector Art provides an extensive portfolio for you to view before hiring us for your project so you can see the quality level of our work and are completely comfortable working with us. If you have any questions or reservations, please contact us prior to making a payment for our services. All changes to orders or projects, refund requests or cancellations must be received in writing by mail, email or fax. Thank you!</p>
                <h4>Web & Other Virtual Services:</h4>
                <p className="text-grey">Payments for custom web, graphic design and other services and projects are made to Vector Art in increments as a courtesy to the client. Once a payment or deposit is made, it is non-refundable. If a project is canceled or postponed, all monies paid are retained by Vector Art and if applicable, a fee for all work completed beyond what was already paid for shall be paid by the client. The development process is such: once client approval is rendered, Vector Art shall commence on that stage of the project. Refund may be considered if the programmer / designer / content writer / SEO expert (or any other resource / staff) has not started the project.</p>
                <p className="text-grey">Vector Art provides an extensive portfolio for you to view before hiring us for your project so you can see the quality level of our work and are completely comfortable working with us. If you have any questions or reservations, please contact us prior to making a payment for our services. All changes to orders or projects, refund requests or cancellations must be received in writing by mail, email or fax. Thank you!</p>
                <h4>Chargebacks:</h4>
                <p className="text-grey">If Vector Art receives a chargeback or payment dispute from a credit card company or bank, your service and/or project will be suspended without notice. A $25 chargeback fee (issued to recover fees passed on to us by the credit company), plus any outstanding balances accrued as a result of the chargeback(s) must be paid in full before service is restored, files delivered, or any further work is done. Instead of issuing a chargeback, contact us to address any billing issues. Requesting a chargeback for a valid charge from us is fraud, and is never an appropriate or legal means of obtaining a refund. Please read and make sure you fully understand our refund policy prior to making a payment.</p>
            </div>
        </div>
        <SocialMedia />
        <Footer />
    </>
  )
}

export default Refund