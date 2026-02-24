import React, { useState } from 'react'
import FeebackImg from "../assets/img/Feedback.png";
import UserFeedback from "../assets/img/UserFeedback.png";

const Feedback = () => {

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gray-50" >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

        <div >
          <img
            src={FeebackImg}
            alt="Client feedback illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>


        <div className="text-center md:text-left">

          <div className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 text-3xl">
            "
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Client's <span className="text-orange-500 underline">Feedback</span>
          </h2>

          <p className='mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-800 font-medium'>"Billio finally gave me a future i can belive in, for both me and my family."</p>

          <div className='flex items-center justify-center md:justify-start mt-8 gap-4'>
            <img src={UserFeedback}
              alt=""
              className='w-14 h-14 rounded-full object-cover'
            />
            <div>
              <p className='font-bold'>Kathy Fortuna</p>
            </div>
          </div>

          <div className='flex justify-center md:justify-start gap-2 mt-6'>
            <div className="w-6 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-5 h-3 bg-orange-300 rounded-full"></div>
            <div className="w-4 h-3 bg-orange-200 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Feedback
