import React, { useEffect, useState } from 'react'
import heroImage from "../assets/img/Header.png";


const Hero = () => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")


    const handleAdd = () => {
        if (!input) {
            setError("Email required")
        } else if (input) {
            setMessage("Free Trial Link has been sent to your email")
        }
        setInput("")
    }

    useEffect(() => {
        if (error || message) {

            const timeout = setTimeout(() => {
                setMessage("")
                setError("")
            }, 1500)
            return () => clearTimeout(timeout)
        }
    }, [error, message])
    return (

       <div id="home" className="relative w-full min-h-screen md:h-screen scroll-mt-28">
            <img
                src={heroImage}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover object-bottom"
            />


            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/30 md:from-black/60 md:via-black/40 md:to-transparent flex items-center px-4 sm:px-6 md:px-12 lg:px-20">

                <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-8">

                    <div className="max-w-xl text-center md:text-left mx-auto md:mx-0" >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
                            <span className='text-orange-500'>Billios </span>
                            Are A Simpler, smarter Way To Invest.
                        </h2>

                        <p className="text-white/90 mt-4 text-sm sm:text-base md:text-lg">Get AI-driven stock portfolios based on your investment goals for the future.</p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 bg-black/30 backdrop-blur-md border border-white/40 border-dashed rounded-xl sm:rounded-3xl w-full max-w-xl mx-auto md:mx-0">
                        <input
                            type="text"
                            placeholder="Enter your Email"
                            className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <button
                            onClick={handleAdd}
                            className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-3xl font-medium cursor-pointer whitespace-nowrap">Free Trial</button>
                    </div>

                    <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
                        <p className='text-red-700 font-medium mt-3'>{error}</p>
                        <p className='text-green-700 font-medium mt-3'>{message}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
