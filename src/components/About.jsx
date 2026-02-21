import React from 'react'

const About = () => {
  return (
    <section className="py-16 bg-gray-50">

      <div className='text-center mb-12'>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className='text-orange-500 underline'>About</span> Us
        </h2>

        <p className="text-gray-500 mt-3">
          Building smarter ways to invest for everyone.
        </p>
      </div>

      <div className='max-w-6xl mx-auto grid md: grid-cols-2 gap-10 items-center'>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Simple. Smart. Accessible Investing
          </h3>

          <p className="text-gray-600 leading-relaxed"> We believe investing should not be complicated or limited to experts. That’s why we design solutions that are easy to use, transparent, and built for real-world results.</p>

          <p className="text-gray-600 leading-relaxed">
            We believe investing should not be complicated or limited to experts. That’s why we design solutions that are easy to use, transparent, and built for real-world results.
          </p>
        </div>

        <div className='grid gap-6'>
          <div className='p-5 bg-white rounded-xl shadow-sm'>
            <h4 className='font-semibold mb-2'> Smart Investing</h4>
            <p className="text-sm text-gray-500">
              Tools that help you make better financial decisions.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Simple & Transparent</h4>
            <p className="text-sm text-gray-500">
              No complexity, just clear and easy solutions.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Future Focused</h4>
            <p className="text-sm text-gray-500">
              Built to help you grow long-term wealth.
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About
