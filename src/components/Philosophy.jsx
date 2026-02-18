import React from 'react'
import phliosophyImg from "../assets/img/Philosophybg.png";

const Philosophy = () => {
    return (
        <section
            className="relative py-60 bg-cover bg-center"
            style={{ backgroundImage: `url(${phliosophyImg})` }}
        >

            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold"> 
                    Our <span className="text-orange-500 underline">Philosophy</span>
                </h2>

                <div className="mt-12 flex justify-center">
                    <div className="bg-blue-900 text-white max-w-2xl px-10 py-8 rounded-2xl shadow-xl">
                        <p className="text-lg font-medium leading-relaxed">We belive investing should be a simple and straighforward experience for anyone —that includes you.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
