import React from 'react'
import Products from './Products'
import Hero from './Hero'
import Philosophy from './Philosophy'
import Feedback from './Feedback'
import Card from './Card'
import Box from './Box'
import Footer from './Footer'
import About from './About'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <Hero />

            <div className='flex item-center justify-center border border-gray-300 border-dashed max-w-4xl mx-auto mt-30 px-4 '>

                <div className='p-6 md:p-10 text-center '>
                    <h3 className='text-orange-500 font-bold text-2xl sm:text-3xl md:text-4xl'>Invest Like The Experts Do.</h3>
                    <p className='mt-4 text-sm sm:text-base md:text-lg text-gray-500'>All the right investment decisions, none of the pricery consultation fees.</p>
                </div>
            </div>

            <div id='aboutus' className="pt-24">
                <About />
            </div>

            <div id='services' className="pt-24">
                <Services />
            </div>

            <div id='contact' className="pt-24" >
                <Contact />
            </div>

            <div className="pt-24">
                <Products />
            </div>

            <div className="pt-24">
                <Philosophy />
            </div>

            <div className="pt-24">
                <Feedback />
            </div>

            <Card />

            <div className="relative bg-[#1b2268] overflow-hidden">

                <div className="absolute top-0 left-0 w-full">
                    <svg
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        className="w-full block"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,100 C300,180 1100,20 1440,100 L1440,0 L0,0 Z"
                        />
                    </svg>
                </div>
                <div className="relative z-10">
                    <Box />
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Home
