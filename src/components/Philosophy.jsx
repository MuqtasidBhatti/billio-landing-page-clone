import React from 'react'
import phliosophyImg from "../assets/img/Philosophybg.png";

const Philosophy = () => {
    return (
        <section
            className="relative min-h[70vh] sm:min-h-[80vh] flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${phliosophyImg})` }}
        >

            <div className="absolute inset-0"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Our <span className="text-orange-500 underline">Philosophy</span>
                </h2>

                <div className="mt-10 sm:mt-12 flex justify-center">
                    <div className="bg-blue-900/90 text-white w-full max-w-2xl px-6 sm:px-8 py-6 sm:py-8 rounded-2xl shadow-xl backdrop-blur-sm">
                        <p className="text-base sm:text-lg font-medium leading-relaxed">We belive investing should be a simple and straighforward experience for anyone —that includes you.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
