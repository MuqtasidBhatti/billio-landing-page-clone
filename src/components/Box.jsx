import React from 'react'
import Box1 from "../assets/img/Box1.png";
import Box2 from "../assets/img/Box2.png";
import Box3 from "../assets/img/Box3.png";


const Box = () => {

    const items = [
        {
            img: Box1,
            line1: "To Make Investment",
            line2: "Simple And Easy"
        },
        {
            img: Box2,
            line1: "To Make Investment",
            line2: "Accessible To All"
        },
        {
            img: Box3,
            line1: "To Make Investment",
            line2: "Human Again"
        }
    ]

    return (
        <section className='bg-[#1b2268] py-14 sm:py-16 md:py-30 px-4 sm:px-6 '>

            <h2 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl text-white'>
                Why We {" "}
                <span className='text-orange-500 underline'>Exist</span>
            </h2>

            <div className='max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-4 border border-orange-400 text-white p-5 rounded-xl hover:bg-white/5 transition-all duration-300'
                    >
                        <img
                            src={item.img}
                            alt="Icon"
                            className='h-10 w-10'
                        />
                        <div>
                            <p className='font-medium'>{item.line1}</p>
                            <p className='font-medium'>{item.line2}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Box
