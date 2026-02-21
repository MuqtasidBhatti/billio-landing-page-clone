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
        const timeout = setTimeout(() => {
            setMessage("")
            setError("")
        }, 1500)
        return () => clearTimeout(timeout)

    }, [error,message])
    return (
        <div className="h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${heroImage})` }}>

            <div className="w-full px-20">
                <div className="max-w-xl" >
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Billios Are A Simpler, smarter Way To Invest.</h2>
                    <p className="text-white/80 mt-4 text-lg">Get AI-driven stock portfolios based on your investment goals for the future.</p>

                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 text-white border border-dashed rounded-3xl w-xl">
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className="flex-1 px-4 py-2 text-white placeholder-white/70 focus:outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleAdd} className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-3xl font-medium cursor-pointer">Free Trial</button>
                </div>
                <p className='text-red-700 font-medium m-3'>{error}</p>
                <p className='text-green-700 font-medium m-3'>{message}</p>
            </div>
        </div>
    )
}

export default Hero
