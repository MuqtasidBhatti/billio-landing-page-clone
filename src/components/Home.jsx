import React from 'react'
import Products from './Products'
import Hero from './Hero'
import Philosophy from './Philosophy'
import Feedback from './Feedback'
import Card from './Card'
import Box from './Box'
import Footer from './Footer'

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

            <div>
                <Products />
            </div>

            <div>
                <Philosophy />
            </div>

            <div>
                <Feedback />
            </div>

            <div>
                <Card />
            </div>

            <div>
                <Box />
            </div>

            <div>
                <Footer />
            </div>


        </div>
    )
}

export default Home
