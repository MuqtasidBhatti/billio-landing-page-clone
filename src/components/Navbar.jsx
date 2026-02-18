import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 font-bold">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">

                <h3 className="text-2xl font-bold">
                    billio<span className="text-orange-500">.</span>
                </h3>

                <div className='flex justify-center gap-8 text-sm'>
                    <Link to="/">Home</Link>
                    <br />
                    <Link to="/aboutUs">About Us</Link>
                    <br />
                    <Link to="/services">Services</Link>
                    <br />
                    <Link to="/investment">Investment</Link>
                    <br />
                    <Link to="/partners">Partners</Link>
                    <br />
                    <Link to="/blog">Blog</Link>
                    <br />
                    <Link to="/contact">Contact</Link>
                    <br />
                    <button className="bg-white text-orange-500 px-5 py-2 rounded-full font-bold cursor-pointer">SIGNUP</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
