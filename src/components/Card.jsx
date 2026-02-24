import React, { useEffect, useState } from 'react'
import CardImg from "../assets/img/Card.png";



const Card = () => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")


    const handleAdd = () => {
        if (!input) {
            setError("Email required")
            return
        }

        setMessage("Link has been sent to your email")
        setInput("")
    }

    useEffect(() => {
        if (!error) return

        const timeout = setTimeout(() => {
            setError("")
        }, 2000)
        return () => clearTimeout(timeout)

    }, [error])

    useEffect(() => {
        if (!message) return

        const timeout = setTimeout(() => {
            setMessage("")
        }, 2000)
        return () => clearTimeout(timeout)

    }, [message])

    return (
        <section className='relative mt-20 bg-white pb-6 px-4 sm:px-6 overflow-hidden'>

            <div className='relative z-10 max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl sm:px-8 md:px-10 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10'>

                <div className='text-center md:text-left'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-snug'>
                        Give Your Future The Head Start {" "}
                        <span className='text-orange-500 underline'>It Deserves.</span>
                    </h2>

                    <p className='mt-4 text-gray-600 text-sm sm:text-base'>
                        Drop your email below to get early access to Billio's powerful trending platform
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-stretch border border-dashed border-orange-300 rounded-xl  sm:rounded-full overflow-hidden max-w-md mx-auto md:mx-0">

                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Enter your email'
                            className="flex-1 px-5 py-3 outline-none text-sm"
                        />
                        <button onClick={handleAdd}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-semibold transition-all duration-30 cursor-pointer">Get Early Access</button>
                    </div>
                    {error && <p className='text-red-600 font-medium mt-3 text-sm'>{error}</p>}
                    {message && <p className='text-green-600 font-medium mt-3 text-sm'>{message}</p>}
                </div>

                <div>
                    <img
                        src={CardImg}
                        alt="Card illustration"
                        className='w-full max-w-sm md:max-w-md mx-auto'
                    />
                </div>
            </div>

            <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio='none'
                className="absolute -bottom-1 left-0 w-full block"
            >
                <path
                    fill="#1b2268"
                    d="M0,160 C300,260 1100,60 1440,160 L1440,320 L0,320 Z"
                />
            </svg>

        </section>
    )
}

export default Card
