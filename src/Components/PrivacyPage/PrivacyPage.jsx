import './PrivacyPage.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'

function PrivacyPage() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>Privacy Policy</b></h1>
            </div>
        </div>
        <div className="privacy-wrapper pt-5 pb-5">
            <div className="container">
                <p className='text-grey'>Vector Art is committed to protecting your privacy. In order to provide a quick and accurate response to all your design and other service related order, Graphixide Inc. asks only for the information necessary to complete your order with precision. All the information is strictly for the use of Graphixide Inc., it will not be shared with any other third party.</p>
                <h4>The information we gather and how we use it:</h4>
                <p className="text-grey">This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally identifiable information’ (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
                <p className="text-grey">When you order any of Vector Art service(s), we need to know your name, your company’s name, your email address, and your mailing address. This allows us to process and complete your order and to notify you of your order status. We also ask some information about your company in order to have a creative direction for your company’s design and other relevant needs. All the rights to the design related service that we provide at the request of a client belong to such client and Vector Art.</p>
                <p className="text-grey">Vector Art may use the information collected from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
                <ul>
                    <li className='text-grey'>To personalize user’s experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                    <li className="text-grey">To improve our website in order to better serve you.</li>
                    <li className="text-grey">To allow us to better service you in responding to your customer service requests.</li>
                    <li className="text-grey">To administer a contest, promotion, survey or other site feature.</li>
                    <li className="text-grey">To quickly process your transactions.</li>
                    <li className="text-grey">To send periodic emails regarding your order or other products and services.</li>
                </ul>
                <h4>The information we gather and how we use it:</h4>
                <p className="text-grey">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.</p>
            </div>
        </div>
        <SocialMedia />
        <Footer />
    </>
  )
}

export default PrivacyPage