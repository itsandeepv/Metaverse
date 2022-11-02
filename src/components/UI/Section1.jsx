import React from 'react'

import backA from "../../assets/img/Meta_Verse/Group 8.png"
import backB from "../../assets/img/Meta_Verse/Group 2.png"
import "./UIcss/Section1.css"
import sideLogo from "../../assets/img/Meta.png"

function Section1() {
    return (
        <div>

            <div className='container mt-4 p-1'>


                <div className='row setSect '>
                    <div className='col text-center'>
                        <div className='sideLogo'>

                            <img src={sideLogo} />
                        </div>

                        <div className='backA'>
                            <img src={backA} />


                            <div className='backB'>
                                <img src={backB} alt="img" />
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section1
