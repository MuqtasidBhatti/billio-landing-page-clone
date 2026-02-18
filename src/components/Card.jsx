import React, { useEffect, useState } from 'react'
import CardImg from "../assets/img/Card.png";



const Card = () => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")


    const handleAdd = () => {
        if (!input) {
            setError("Please Enter your email first")
        } else if (input) {
            setMessage("Early access link has been sent to your email")
        }
        setInput("")
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMessage("")
            setError("")
        }, 1500)
        return () => clearTimeout(timeout)

    }, [error, message])

    return (
        <section className='bg-blue-900 py-20 px-20 mt-60'>

            <div className='max-w-5xl mx-auto bg-white rounded-lg shadow-xl px-10 grid md:grid-cols-2 items-center gap-12'>

                <div>
                    <h2 className='text-4xl font-bold leading-snug pl-10'>
                        Give Your Future The Head Start {" "}
                        <span className='text-orange-500'>It Deserves.</span>
                    </h2>

                    <p className='mt-4 text-gray-600 pl-10'>
                        Drop your email below to get early access to Billio's powerful trending platform
                    </p>

                    <div className="mt-8 flex items-center border-2 border-dashed border-orange-300 rounded-full overflow-hidden ml-5 ">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Enter your email'
                            className="flex-1 py-2 outline-none pl-5"
                        />
                        <button onClick={handleAdd} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold rounded-full cursor-pointer">Get Early Access</button>
                    </div>
                    <p className='text-red-700 font-medium ml-10 mt-2'>{error}</p>
                    <p className='text-green-700 font-medium ml-10 mt-2'>{message}</p>
                </div>

                <div >
                    <img
                        src={CardImg}
                        alt="Card illustration"
                        className='w-full'
                    />
                </div>
            </div>



        </section>
    )
}

export default Card
