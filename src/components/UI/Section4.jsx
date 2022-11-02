import React from 'react'
import "./UIcss/section4.css"

import cart from "../../assets/img/Section4_img/WhatsApp_Image_2022-10-19_at_10.31.47-removebg-preview.png"

function Section4() {
    return (
        <div>
            <div className='section4_img  '>
                <div className='sect4_back'>
                    <div className='container  cont4_back p-1'>
                        <div className='row p-1'>
                            <div className='col-lg-6 sect4_colBack '>
                                <div className='sect4_carton'>

                                    <img src={cart} alt="logo" />
                                </div>



                            </div>


                            <div className='col-lg-6 sect4 p-4 _colBack '>
                                <div className='sect4_text pt-5'>

                                    <p className='sect4_textHead'>
                                        MetaVerse Development
                                    </p>


                                    <p className='sect4_textHead2'>
                                        A MetaVerse Token with BUSD Rewards , NFT MarketPlace and Many Utilities.     
                                        
                                        
                                        </p>
                                    <p className='sect4_textHead3'>
                                        MetaOneVerse is a HyperDeflationary Token with MetaVerse Development , Staking , MetaOneVerse Charity Programme and NFT Marketplace.

                                        MetaOneVerse Token works on an autonomous, frictionless, yield farming and liquidity generation protocol.

                                        Hold $M1Verse tokens in your wallet and earn passive income in Binance pegged USD ($BUSD) – a regulated stable-coin pegged 1-1 to the US dollar.

                                        Contract                                     </p>

                                </div>



                            </div>









                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
