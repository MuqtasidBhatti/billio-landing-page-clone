import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#131d52] mt-16 sm:mt-20 '>

            <div className="max-w-6xl mx-auto rounded-2xl px-6 sm:px=8 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">

                <div>
                    <h3 className="font-semibold text-lg mb-6">Company</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li>
                            <a href="#aboutus" className="hover:text-orange-400 cursor-pointer transition">About Billio</a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-orange-400 cursor-pointer transition"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="#contact" className="hover:text-orange-400 cursor-pointer transition"
                            >
                                Contact Us
                            </a>
                        </li>

                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6 ">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">Subscription</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">Membership</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">FAQ</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">Investors</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6">Resources</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">Privacy Policy</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">Terms & Conditions</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">Pages</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">Help center</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">Community</li>
                    </ul>
                </div>

                <div>
                    <h3 className=" mb-6 text-lg font-semibold">Contact Us</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">342-601-8077</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">contact@yourmail.com</li>
                        <li className="hover:text-orange-400 transition opacity-60 cursor-not-allowed">227 SJJersey city, NJ 07330</li>
                    </ul>
                </div>

            </div>

            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-white gap-4 py-6 px-6 border-t border-blue-800">

                <p className="text-sm text-gray-400 text-center sm:text-left">Copyright 2026. All Rights Reserved by us</p>

                <h3 className='text-xl sm:text-2xl font-bold '>billio</h3>

                <a href="#home" className="text-sm hover:text-orange-400 transition">
                    Back to top ↑
                </a>
            </div>

        </footer >
    )
}

export default Footer
