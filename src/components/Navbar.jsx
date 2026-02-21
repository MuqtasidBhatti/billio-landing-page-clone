import React from 'react'

const Navbar = ({ setShowModal, isLoggedIn, setIsLoggedIn }) => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">

                <h3 className="text-3xl font-bold cursor-pointer">
                    billio<span className="text-orange-500">.</span>
                </h3>

                <div className="flex items-center gap-8 text-sm font-medium">

                    <a href="#home" className="hover:text-orange-400 transition">
                        Home
                    </a>

                    <a href="#about" className="hover:text-orange-400 transition">
                        About Us
                    </a>

                    <a href="#services" className="hover:text-orange-400 transition">
                        Services
                    </a>

                    <a href="#contact" className="hover:text-orange-400 transition">
                        Contact
                    </a>

                    {isLoggedIn ? (
                        <button onClick={() => setIsLoggedIn(false)}className="bg-white text-orange-500 px-5 py-2 rounded-full font-bold hover:bg-orange-100 transition cursor-pointer">Logout</button>
                    ) : (

                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-white text-orange-500 px-5 py-2 rounded-full font-bold hover:bg-orange-100 transition cursor-pointer"
                        >
                            SIGN UP
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
