import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Section5 from '../Section5'
import Section1 from '../UI/Section1'
import Section2 from '../UI/Section2'
import Section3 from '../UI/Section3'
import Section4 from '../UI/Section4'
import "./home.css"
import Section6 from '../Section6'
import Section7 from '../Section7'


function Home() {
    return (
        <>
        <div className=' home_box '>



            <Navbar />


            <section className='home_img'>

                <Section1 />

            </section>



        </div>


<Section2/>
<Section3/>

<Section4/>
<Section5/>
<Section6/>
            <Section7 />


<Footer/>
        </>
    )
}

export default Home
