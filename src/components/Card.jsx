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
        if(!error) return

        const timeout = setTimeout(() => {
            setError("")
        }, 2000)
        return () => clearTimeout(timeout)

    }, [error])

    useEffect(() => {
        if(!message) return

        const timeout = setTimeout(() => {
            setMessage("")
        }, 2000)
        return () => clearTimeout(timeout)

    }, [message])

    return (
        <section className='py-6 px-6 mt-40'>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl px-10 py-10 grid md:grid-cols-2 items-center gap-10'>

                <div>
                    <h2 className='text-4xl font-bold leading-snug space-y-4'>
                        Give Your Future The Head Start {" "}
                        <span className='text-orange-500 underline'>It Deserves.</span>
                    </h2>

                    <p className='mt-4 text-gray-600 space-y-4'>
                        Drop your email below to get early access to Billio's powerful trending platform
                    </p>

                    <div className="mt-6 flex items-center border border-dashed border-orange-300 rounded-full overflow-hidden max-w-md">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Enter your email'
                            className="flex-1 px-5 py-3 outline-none text-sm"
                        />
                        <button onClick={handleAdd}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-semibold rounded-full cursor-pointer">Get Early Access</button>
                    </div>
                    <p className='text-red-700 font-medium space-y-4 mt-2'>{error}</p>
                    <p className='text-green-700 font-medium space-y-4 mt-2'>{message}</p>
                </div>

                <div >
                    <img
                        src={CardImg}
                        alt="Card illustration"
                        className='w-[85%] mx-auto'
                    />
                </div>
            </div>



        </section>
    )
}

export default Card
