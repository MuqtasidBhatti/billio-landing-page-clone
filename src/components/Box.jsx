import React from 'react'
import Box1 from "../assets/img/Box1.png";
import Box2 from "../assets/img/Box2.png";
import Box3 from "../assets/img/Box3.png";


const Box = () => {
    return (
        <section className='bg-[#1b2268] '>
            <h2 className='text-center font-bold text-4xl text-white mt-10 '>
                Why We {" "}
                <span className='text-orange-500 underline'>Exist</span>
            </h2>
            <div className='flex justify-center gap-10 mt-10 pb-15'>

                <div className='h-15 w-60 border border-orange-400 flex items-center text-white'>
                    <img
                        src={Box1}
                        alt=""
                        className='h-10 w-10 flex items-center justify-center m-2'
                    />
                    <div>
                        <p>To Make Investment</p>
                        <p>Simple And Easy</p>
                    </div>

                </div>

                <div className='h-15 w-60 border border-orange-400 flex items-center text-white'>
                    <img
                        src={Box2}
                        alt=""
                        className='h-10 w-10 flex items-center justify-center m-2'
                    />
                    <div>

                        <p>To Make Investment</p>
                        <p>Accessible To All</p>
                    </div>
                </div>

                <div className='h-15 w-60 border border-orange-400 flex items-center text-white'>
                    <img
                        src={Box3}
                        alt=""
                        className='h-10 w-10 flex items-center justify-center m-2'
                    />
                    <div>
                        <p>To Make Investment</p>
                        <p>Human Again</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Box
