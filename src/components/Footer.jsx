import React from 'react'

const Footer = () => {
    return (
        <footer className='pt-10 '>

            <div className="max-w-6xl mx-auto bg-blue-950 rounded-2xl px-10 py-12 grid md:grid-cols-4 gap-10 text-white shadow-lg">

                <div  >
                    <h3 className="font-semibold text-lg mb-6">Company</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="hover:text-orange-400 cursor-pointer transition">About Billio</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Services</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Partners</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Investors</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Contact us</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-orange-400 cursor-pointer transition">Contact</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Subscription</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Membership</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">FAQ</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Investors</li>
                    </ul>
                </div>

                <div className=''>
                    <h3 className="font-semibold text-lg mb-6">Resources</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="hover:text-orange-400 cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Terms & Conditions</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Pages</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Help center</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">Community</li>
                    </ul>
                </div>

                <div>
                    <h3 className=" mb-6 text-lg font-semibold">Contact Us</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="hover:text-orange-400 cursor-pointer transition">342-601-8077</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">contact@yoursite.com</li>
                        <li className="hover:text-orange-400 cursor-pointer transition">2972 Sunrise City, FL 33173</li>
                    </ul>
                </div>

            </div>

            <div className="max-w-6xl mx-auto flex justify-between items-center text-white py-6 px-6 border-t border-blue-800">
                <p className="text-sm text-gray-300">Copyright 2026. All Rights Reserved by us</p>
                <h3 className='text-2xl font-bold '>billio</h3>
                <a href="#" className="text-sm hover:text-orange-400">
                    Back to top ↑
                </a>
            </div>

        </footer >
    )
}

export default Footer
