import React, { useState } from 'react'
import productImage from "../assets/img/Product.png";
import productImage2 from "../assets/img/Product2.png";

const Products = () => {
    const [cards] = useState([
        {
            id: 1,
            title: "Plan Your Dream Retirement",
            desc: "This starts by asking the right questions about you, your values and your future – including the goals you've always wanted to save for (but weren't sure how to).",
            img: productImage
        },

        {
            id: 2,
            title: "Let Us Do The Number Crunching For You",
            desc: "Billio builds your custom portfolio based on verified, well-governed stock options that work to raise your investments’ long-term profitability.",
            img: productImage2

        },
    ])
    return (
        <section className="py-14 sm:py-16 md:py-20 bg-gray-50">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
                <span className="text-orange-500 underline">Product</span> Breakdown
            </h2>

            <div className="space-y-10 sm:space-y-12 max-w-5xl mx-auto px-4 sm:px-6 md:px-10 ">

                {cards.map((card, index) =>(

                    <div
                        key={card.id}
                        className="grid grid-cols-1 md:grid-cols-2 items-center border border-dashed border-gray-300 rounded-xl p-6 sm:p-8 md:p-10 bg-white shadow-sm gap-8 hover:shadow-md transition-all duration-300">

                        <div className={`${index % 2 !== 0 ? "md:order-2" : ""} flex justify-center`}>

                            <img
                                src={card.img}
                                alt="Product illustration"
                                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                            />
                        </div>

                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                                {card.title}
                            </h3>
                        <p className="text-gray-600 text-sm  sm:text-base leading-relaxed">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products
