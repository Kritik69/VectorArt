import './TermsPage'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'

function TermsPage() {
  return (
    <>
        <NavBar />
        <div className="digitizing-wrapper p-5">
            <div className="container text-left text-white">
                <h1><b>TERMS AND CONDITION</b></h1>
            </div>
        </div>
        <div className="terms-wrapper pt-5 pb-5">
            <div className="container">
                <p className="text-grey">Please take time to read through our Terms and Conditions thoroughly and ensure you understand them before you commence a project with us. By requesting designs and/or other services from Vector Art you agree to our Terms and Conditions and you are aware that you are entering a binding contract.</p>
                <p className="text-grey">Our Terms and Conditions are supplied with every quote and must be signed before we start work to ensure all our clients fully understand all responsibilities during a project. Please contact us to discuss any queries or concerns you may have before accepting them.</p>
                <p className="text-grey">These Terms and Conditions cover all Contracts entered into by a Client with the Company for services relating to design, printing, copywriting, visual media, web sites, brand identity, illustrations, images, marketing and Artwork.</p>
                <h4>USE OF THIS WEBSITE:</h4>
                <p className="teaxt-grey">Your use of this website and any service contained within constitutes acceptance of these terms and conditions in full. If you do not agree with any of the below conditions, please do not use this website. As a user of this website, you agree not to reproduce, retransmit, disseminate, sell, publish, broadcast, or otherwise use any material from this website without Vector Art express prior written consent.</p>
                <h4>Proposals/Quotations:</h4>
                <p className="text-grey">(a) Proposals/Quotations are estimates based on the original brief provided by the Client. Quotations are subject to change upon sighting of artwork, text or other circumstances that may affect the job.</p>
                <p className="text-grey">(b) Proposals/Quotations, unless specifically outlined, do not include couriers, stock imagery, copywriting or other ‘out of pocket’ expenses.</p>
                <p className="text-grey">(c) Proposals/Quotations are only valid for 30 days from date of issue.</p>
                <p className="text-grey">(d) Should there be a change of direction or new concept that differs from the initial brief, additional fees will be payable according to time/materials involved. Vector Art will notify you immediately of this and additional quote/s will be provided.</p>
                <h4>WEBSITE LINKS</h4>
                <p className="text-grey">From time to time Vector Art website may also include links to other websites. These links are provided in order to obtain further information. They do not signify that Vector Art endorses the website(s). Vector Art takes no responsibility for the content of the linked website(s). Links to this website from another website or document without first seeking written consent from Vector Art is strictly prohibited.</p>
                <h4>DESIGN & OTHER SERVICE CHARGES</h4>
                <p className="text-grey">Charges for design & other services to be provided by Vector Art will be set out in the detailed quotation that is provided to the Client. At the time of the Client’s signed acceptance of this quotation via the Project Acceptance form, the Client indicates acceptance of all the Terms and Conditions, and agrees to pay a non-refundable deposit of fifty percent (50%) of the quoted fee to Vector Art, which will become due immediately. Work on the project will not commence until Vector Art has received the deposit. Following the completion of the services, fifty percent (50%) of the total charges shall be paid by the Client to Vector Art</p>
                <h4>THIRD-PARTY CONTRACTS</h4>
                <p className="text-grey">Vector Art may contract with other creative professionals to provide services such as web development, web marketing, photography, illustration, copywriting and printing. Vector Art accept no responsibility for any third parties Terms and Conditions and will not be held liable for any dispute regarding them. Any discrepancies should be taken up with the company providing the service(s) in question.</p>
                <h4>DESIGN & ANY OTHER PROJECT DURATION</h4>
                <p className="text-grey">Any indication given by Vector Art of a design or any other project’s duration is to be considered by the Client to be an estimation. Vector Art cannot be held responsible for any project over-runs, whatever the cause. Estimated project duration should be deemed to be from the date that the non-refundable deposit has been received by Vector Art</p>
                <h4>COPYRIGHTS & TRADEMARKS</h4>
                <p className="text-grey">By supplying text, images and other data to Vector Art for inclusion in the Client’s project, the Client declares that it holds the appropriate copyright and/or trademark permissions. The ownership of such materials will remain with the Client, or rightful copyright or trademark owner. Any artwork, images, or text supplied and/or designed by Vector Art on behalf of the Client, will remain the property of Vector Art and/or it’s suppliers, excluding logo design in which full copyright will be released to the Client upon receipt of full payment. The Client may request in writing from Vector Art, the necessary permission to use materials (for which Vector Art holds the copyright) in forms other than for which it was originally supplied, and Vector Art may, at it’s discretion, grant this. Such permission must be obtained in writing before Vector Art will allow any of the aforesaid artwork, images, text, or other data to be used. Vector Art reserves the right to charge fees for additional usage.</p>
                <p className="text-grey">By supplying images, text, or any other data to Vector Art, the Client grants Vector Art permission to use this material freely in the pursuit of the design and the right to feature the work for promotional purposes unless otherwise stated. Should Vector Art, or the Client supply an image, text, audio clip or any other file for use in print or web-based projects believing it to be copyright and royalty free, which subsequently emerges to have such copyright or royalty usage limitations, the Client will agree to allow Vector Art to remove and/or replace the file. The Client agrees to fully indemnify and hold Vector Art free from harm in any and all claims resulting from the Client not having obtained all the required copyright, and/or any other necessary permissions.</p>
                <h4>LICENSING</h4>
                <p className="text-grey">Any design, copywriting, drawing, idea or code created for the Client by Vector Art, or any of its contractors, is licensed for use by the Client on a one-time only basis and may not be modified, re-used, or re-distributed in any way or form without the express written consent of Vector Art and any of its relevant sub-contractors. All design work where there is a risk that another party may make a claim should be registered by the Client with the appropriate authorities prior to publishing or first use or searches and legal advice sought as to its use. Vector Art will not be held responsible for any and all damages resulting from such claims. Vector Art is not responsible for any loss, or consequential loss, non-delivery of responsible for any such loss or damage. Any claim against Vector Art shall be limited to the relevant fee(s) paid by the Client.</p>
            </div>
        </div>
        <SocialMedia />
        <Footer />
    </>
  )
}

export default TermsPage