import React from 'react'
import "./UIcss/Section1.css"


import iconA from "../../assets/img/Meta_VerseCarton/Group 8443.png"
import iconB from "../../assets/img/Meta_VerseCarton/Group 8444.png"
// import iconC from "../../assets/img/Meta_VerseCarton/Group 8451.png"
import cart1 from "../../assets/img/Meta_VerseCart/Group 8451.png"
import cart2 from "../../assets/img/Meta_VerseCart/Meta_Verse (2)/Group 8449.png"
import cart3 from "../../assets/img/Meta_VerseCart/Meta_Verse (2)/Group 8450.png"



import Slider from "react-slick";



function Section2() {





    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        swipeToSlide: true,

        responsive: [

           
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }












    return (
        <div className='section2_img'>
            <div className='sect2_back '>
                <div className='container  p-1'>
                <div className='row  '>
                
               
                <div className='col-lg-6 p-1'>

                            <div className='row section2_mob'>

                                <div className='row p-2'>
                                    <p className='section2_text'>
                                        The only BUSD Rewarding token with Metaverse Development and NFT

                                    </p>

                                </div>



                                <div className='col d-flex justify-content-around'>
                                    <div className='section2_btn'>

                                        <button>Join Telegram   </button>
                                    </div>
                                    <div className='section2_btn'>

                                        <button>Join Telegram   </button>
                                    </div>

                                    <div className='section2_btn'>

                                        <button>Join Telegram   </button>
                                    </div>
                                </div>


                                <div className='col my-3 p-2'>


                                    <p className="section2_subHead">
                                        A MetaVerse Token with BUSD Rewards , NFT MarketPlace and Many Utilities.
                                    </p>

                                    <p className='section2_desc my-3'>
                                        MetaOneVerse is a HyperDeflationary Token with MetaVerse Development , Staking , MetaOneVerse Charity Programme and NFT Marketplace.

                                        MetaOneVerse Token works on an autonomous, frictionless, yield farming and liquidity generation protocol.

                                        Hold $M1Verse tokens in your wallet and earn passive income in Binance pegged USD ($BUSD) – a regulated stable-coin pegged 1-1 to the US dollar.

                                        Contract


                                        <address className='my-3'>
                                            Address : 0xd0b4810433bad9078236b38ff4644c7e00bc4e64
                                        </address>

                                    </p>


                                </div>


                            </div>



                        </div>

                        <div className='col-lg-6'>
                            <div className='section2_carton'>
                                <div className='iconA'>
                                    <img src={iconA} alt="img" />
                                </div>
                                <div className='iconB'>

                                    <img src={iconB} alt="img" />
                                </div>

                            </div>


                        </div>
                        <div className='row cart_position p-2'>

                            <Slider {...settings} >
                                <div className='col-lg-4 p-3 '>
                                    <div className='cart_back'>
                                        <img src={cart1} alt="img" />
                                    </div>

                                </div>
                                <div className='col-lg-4 p-3 '>
                                    <div className='cart_back'>
                                        <img src={cart2} alt="img" />
                                    </div>

                                </div>
                                <div className='col-lg-4 p-3 '>
                                    <div className='cart_back'>
                                        <img src={cart3} alt="img" />
                                    </div>

                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
