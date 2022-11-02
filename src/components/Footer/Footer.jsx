import React from 'react'
import "./footer.css"

import logo from "../../assets/img/image 1.png"
import icon1 from "../../assets/img/Meta_Verse (2)/Group 8421.png"
import icon2 from "../../assets/img/Meta_Verse (2)/Group 8422.png"
import icon3 from "../../assets/img/Meta_Verse (2)/Group 8425.png"
import icon4 from "../../assets/img/Meta_Verse (2)/Group 8430.png"
import icon5 from "../../assets/img/Meta_Verse (2)/Group 8431.png"

import link1 from "../../assets/img/footerimg/Meta_Verse (5)/Group 8278.png"
import link2 from "../../assets/img/footerimg/Meta_Verse (5)/Group 8279.png"
import link3 from "../../assets/img/footerimg/Meta_Verse (5)/Group 8280.png"
import link4 from "../../assets/img/footerimg/Meta_Verse (5)/Group 8281.png"





function Footer() {
    return (
        <div>
            <div className='footer_img my-1 '>
                <div className='footer_back'>
                    <div className='container py-4'>
                        <div className='row p-1 footer_item'>
                            <div className='col-lg-4 p-1'>
                                <div>
                                    <img src={logo} alt="logo" />
                                </div>
                                <p className='footer_text pt-2'>

                                    MetaOneVerse is a HyperDeflationary Token with MetaVerse Development , Staking , MetaOneVerse Charity Programme and NFT Marketplace.

                                    MetaOneVerse Token works on an autonomous, frictionless, yield farming and liquidity generation protocol.

                                    Hold $M1Verse
                                </p>
                            </div>

                            <div className='col-lg-4 p-3'>
                                <div className='row d-block'>
                                    <div className='col'>
                                        <h4 className='page'>
                                            Page
                                        </h4>


                                    </div>
                                    <div className='col '>
                                        <div className='my-1 d-flex justify-content-around'>
                                            <div>
                                                <a href='#'>
                                                    <img src={icon1} />
                                                </a>

                                            </div>

                                            <div>
                                                <a href='#'>
                                                    <img src={icon2} />
                                                </a>

                                            </div>


                                            <div>
                                                <a href='#'>
                                                    <img src={icon3} />
                                                </a>

                                            </div>

                                        </div>

                                        <div className='my-3 d-flex justify-content-around'>

                                            <div>
                                                <a href='#'>
                                                    <img src={icon4} />
                                                </a>

                                            </div>
                                            <div>
                                                <a href='#'>
                                                    <img src={icon5} />
                                                </a>

                                            </div>
                                            <div>
                                                <a href='#'>
                                                    <img src={logo} />
                                                </a>

                                            </div>

                                        </div>
                                    </div>





                                </div>

                            </div>

                            <div className='col-lg-4 p-1'>
                                <div>
                                    <p className='join'>
                                        Join our community
                                    </p>
                                </div>

                                <div className='email_input my-3'>

                                    <input type="text" placeholder='metaoneverse@gmail.com' />
                                    <button className='subcri_btn'>
                                            Subscribe
                                    </button>
                                    


                                </div>
                                <div className='social_link my-3'>
                                    <ul className='list-unstyled d-flex justify-content-around'>
                                        <li><a href="#"> <img src={link1} />    </a> </li>
                                        <li><a href="#"> <img src={link2} />    </a> </li>
                                        <li><a href="#"> <img src={link3} />    </a> </li>
                                        <li><a href="#"> <img src={link4 } />    </a> </li>
                                    </ul>

                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
