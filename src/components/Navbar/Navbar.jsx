import React from 'react'
import "./navbar.css"

import logo2 from "../../assets/img/Meta.png"
import Logo from "../../assets/img/image 1.png"
import icon1 from "../../assets/img/Meta_Verse (2)/Group 8421.png"
import icon2 from "../../assets/img/Meta_Verse (2)/Group 8422.png"
import icon3 from "../../assets/img/Meta_Verse (2)/Group 8425.png"
import icon4 from "../../assets/img/Meta_Verse (2)/Group 8430.png"
import icon5 from "../../assets/img/Meta_Verse (2)/Group 8431.png"
import login from "../../assets/img/Meta_Verse (1)/Group 8432.png"
import cart from "../../assets/img/Meta_Verse (1)/Vector.png"







function Navbar() {
    return (
        <div className='container  navbar_color mt-4 p-1'>
            <div className='row '>

                <div className='row pt-3 d-flex justify-content-center align-item-center'>
                    <div className='col-lg-4 col-md-4 nav_logo'>
                        <ul className='pl-4 list-unstyled d-flex gap-1 '>
                    <li>
                    
                    
                        <a href='#'> <img src={Logo} alt='logo' /> </a>
                    


                    </li>

                </ul>

                    </div>

                    <div className='nav_links col-lg-8 col-md-8 d-flex justify-content-end align-item-center'>
                        <ul className='list-unstyled d-flex gap-1 '>
                            <li> <a href='#'> <img src={icon1} alt='img' />     </a>   </li>
                            <li> <a href='#'> <img src={icon2} alt='img' />     </a>   </li>
                            <li> <a href='#'> <img src={icon3} alt='img' />     </a>   </li>
                            <li> <a href='#'> <img src={icon4} alt='img' />     </a>   </li>
                            <li> <a href='#'> <img src={icon5} alt='img' />     </a>   </li>
                            <li className='cart_img'> <a href='#'> <img src={cart} alt='img' />     </a>   </li>
                            <li className=''> <a href='#'> <img src={login} alt='img' />     </a>   </li>

                        </ul>

                    </div>

                </div>
            </div>




        </div>
    )
}

export default Navbar
