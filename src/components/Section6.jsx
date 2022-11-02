import React from 'react';
import './section6.css'
import FirstLogo from '../assets/img/bitmart.png'
import SecondLogo from '../assets/img/bscscan.png'
import ThirdLogo from '../assets/img/coinmarketcap-removebg-preview 1.png'
import ForthLogo from '../assets/img/hotbit.png'
import FiveLogo from '../assets/img/indoex.png'
import SixLogo from '../assets/img/pcs.png'
import SevenLogo from '../assets/img/poocoin.png'
import EightLogo from '../assets/img/coingecko-removebg-preview 1.png'

function Section6() {








    
    return (
        <div className='bg_image_section6'>
            <div className='container2 w-100'>
                <div className=''>
                    <div className='top_img'>
                  <marque>

                  <img src={FirstLogo}></img>
                  
                  </marque>  

                        <img src={SecondLogo}></img>
                        <img src={ThirdLogo}></img>
                        <img src={ForthLogo}></img>
                        
                    </div>
                    <div className='bottom_img'>
                        <img src={FiveLogo}></img>
                        <img src={SixLogo}></img>
                        <img src={SevenLogo}></img>
                        <img src={EightLogo}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6
