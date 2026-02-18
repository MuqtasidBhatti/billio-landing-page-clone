import React, { useState } from 'react'
import FeebackImg from "../assets/img/Feedback.png";
import UserFeedback from "../assets/img/UserFeedback.png";

const Feedback = () => {

  return (
    <section className=" bg-gray-50" >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        <div >
          <img
            src={FeebackImg}
            alt="Client feedback illustration"
            className="w-full"
          />
        </div>


        <div>
          <div className="w-10 h-8 bg-blue-700 text-white flex items-center justify-center rounded-lg mb-4 text-center text-4xl pt-3">
            "
          </div>

          <h2 className="text-3xl font-bold mt-2">
            Client's <span className="text-orange-500 underline">Feedback</span>
          </h2>

          <p className='mt-6 text-2xl leading-relaxed text-gray-800 font-medium'>"Billio finally gave me a future i can belive in, for both me and my family."</p>

          <div className='flex items-center mt-8'>
            <img src={UserFeedback}
              alt=""
              className='w-14 h-14 rounded-full object-cover'
            />
            <div>
              <p className='font-bold'>Kathy Fortuna</p>
            </div>
          </div>

          <div className='flex gap-1'>
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
