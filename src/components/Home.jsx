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

            <div className='flex item-center justify-center border border-gray-300 border-dashed w-xl m-auto mt-10 '>
                <div className='p-8 '>
                    <h3 className='flex items-center justify-center text-orange-500 font-bold text-4xl'>Invest Like The Experts Do.</h3>
                    <p className='flex items-center justify-center text-l text-gray-500'>All the right investment decisions, none of the pricery consultation fees.</p>
                </div>
            </div>

            <div id='about' className="pt-24">
                <About/>
            </div>

            <div id='services' className="pt-24">
                <Services/>
            </div>

            <div id='contact' className="pt-24" >
                <Contact/>
            </div>

            <div className="pt-24">
                <Products  />
            </div>

            <div className="pt-24">
                <Philosophy />
            </div>

            <div className="pt-24">
                <Feedback />
            </div>

            <div className="relative bg-[#1b2268] overflow-hidden">
                <div className="absolute top-0 left-0 w-full">
                    <svg viewBox="0 0 1440 320" className="w-full">
                        <path
                            fill="#ffffff"
                            d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,176C1120,181,1280,171,1360,165.3L1440,160L1440,0L0,0Z"
                        />
                    </svg>
                </div>

                <div className="absolute top-10 left-0 w-full">
                    <svg viewBox="0 0 1440 320" className="w-full">
                        <path
                            fill="#ffffff"
                            d="M0,224L80,202.7C160,181,320,139,480,128C640,117,800,139,960,154.7C1120,171,1280,181,1360,186.7L1440,192L1440,0L0,0Z"
                        />
                    </svg>
                </div>
                <div className="relative z-10">
                    <Card />
                    <Box />
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Home
