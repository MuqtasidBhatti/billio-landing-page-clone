import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-blue-900 pt-10 '>

            <div className="max-w-7xl mx-auto bg-blue-950 rounded-3xl px-12 py-16 grid md:grid-cols-4 gap-10 text-white">

                <div  >
                    <h3 className="font-semibold text-lg mb-6">Company</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>About Billio</li>
                        <li>Services</li>
                        <li>Partners</li>
                        <li>Investors</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>Contact</li>
                        <li>Subscription</li>
                        <li>Membership</li>
                        <li>FAQ</li>
                        <li>Investors</li>
                    </ul>
                </div>

                <div className=''>
                    <h3 className="font-semibold text-lg mb-6">Resources</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Pages</li>
                        <li>Help center</li>
                        <li>Community</li>
                    </ul>
                </div>

                <div>
                    <h3 className=" mb-6 text-lg font-semibold">Contact Us</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>342-601-8077</li>
                        <li>contact@yoursite.com</li>
                        <li>2972 Sunrise City, FL 33173</li>
                    </ul>
                </div>

            </div>

            <div className="max-w-6xl mx-auto flex justify-between items-center text-white py-8 px-6">
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
