import React from 'react'
import './EditingContent.css'
import ImgEdit from './../../MediaFiles/imageEditingImg.jpg'

function EditingContent() {
  return (
    <>
        <div className="editing-wrapper p-5">
            <div className="container">
                <div className="row">
                    <h4 className='text-center text-black'>WE OFFERS OUR EXPERIENCE AND EXPERTISE RIGHT UPTO THE FINAL IMAGE EDITING STAGE SO THAT THE PHOTOGRAPHS ARE READY FOR RE-PRINTS AND END USE.</h4>
                    <div className="col-md-6">
                        <img className='editImg' src={ImgEdit} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    - PRODUCT RETOUCHING
                                </button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Vector Ar specializes in detailed photo retouch and Photoshop post production.
                                    Whether the images are low quality, blurry, or have been poorly represented by the camera, it’s easy to have the photo adjusted to fit the quality and profile that your business deserves.
                                    we offer professional photo retouching for online stores and brands to make your products shine on the biggest stage.
                                    Special conditions on large batches and recurring orders. Send the request to get a quote, Free Trial and retoucher’s consultation in less than 24 hrs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    - FASHION RETOUCHING
                                </button>
                            </h4>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>This is perfect for businesses that sell the same product in different colors, allowing a perfect showcase of how the image might look at the other end.
                                    This increases confidence in your products and gives your potential clients a clear idea of what each variation will actually look like.</p>
                                    <p>
                                    Any fabric, fur, lace and wedding dresses. Clipping path, shape and color correction, dust removal etc. Retouching of standalone clothes and model photo sessions, including model retouching. Photo editing with ‘ghost mannequin’ effect, merge of front and neck parts of the clothes into one three-dimensional photo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    - JEWELRY RETOUCHING
                                </button>
                            </h4>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Vector Art specializes in Winning photos of rings, necklaces, bracelets and earrings are unthinkable today without jewelry retouching service. When you deal with jewelry the professional retouching is crucial for the high sales in our era of online stores with photo catalogs. Our jewelry photo editing services focus not only on high-end segment of major manufacturers or resellers, demanding the highest attention to details for their catalogs, constant and ultimate quality, but also on beginning designers, enhancing their non-professional photos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    - CLIPPING PATHS
                                </button>
                            </h4>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>A clipping path service is a process of removing a background from an image. We provide accurate photo cutting of simple and complex objects such as transparent items, delicate items with furry or thin borders, hair, etc..
                                    White background allows focus on the object and shows emphasis on the details of the objects such as colors, texture and shape</p>
                                    <p>Transparent background provide benefits in certain situations. They are excellent for banner advertisements, and are typically used for the clipping path.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    - COLOR CORRECTIONS
                                </button>
                            </h4>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Color enhancement is demanded for successful printing and web publishing which includes temperature, skin tone adjustment, saturation, exposure, contrast and brightness correction, highlights and shadows balance control.
                                    This is where Vector Art comes in, as we offer a truly unique color replacement service for online stores and Promotional product catalogues.</p>
                                    <p>With the help of our color changing service, you don’t need to worry about this becoming a problem anymore – we can make sure your products shine as good online as they do in real life.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    - RESTORATION
                                </button>
                            </h4>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Color enhancement is demanded for successful printing and web publishing which includes temperature, skin tone adjustment, saturation, exposure, contrast and brightness correction, highlights and shadows balance control.
                                    This is where Vector Art comes in, as we offer a truly unique color replacement service for online stores and Promotional product catalogues.</p>
                                    <p>With the help of our color changing service, you don’t need to worry about this becoming a problem anymore – we can make sure your products shine as good online as they do in real life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditingContent