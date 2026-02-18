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
            desc: "Eiko builds your custom portfolio based on verified, well-governed stock options that work to raise your investments’ long-term profitability.",
            img: productImage2

        },
    ])
    return (
        <section className="py-16 bg-gray-50">

            <h2 className="text-3xl font-bold text-center mb-12">
                <span className="text-orange-500 underline">Product</span> Breakdown
            </h2>

            <div className="space-y-12 max-w-4xl mx-auto px-6">

                {cards.map(card =>

                    <div
                        key={card.id}
                        className="grid md:grid-cols-2 items-center border border-dashed border-gray-300 rounded-xl p-10 bg-white shadow-sm">

                        <div className="flex">
                            <img
                                src={card.img}
                                alt="Product illustration"
                                className="w-72"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold leading-snug">
                                {card.title}
                            </h3>
                        <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products
