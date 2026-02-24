import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Investment Planning",
      desc: "Plan your financial future with smart strategies."
    },

    {
      title: "Portfolio Management",
      desc: "Track and manage your investments easily."
    },

    {
      title: "Market Insights",
      desc: "Get data-driven insights to make better decisions."
    },
    {
      title: "Secure Transactions",
      desc: "Your investments are protected with top security."
    }
  ]

  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg-:px-16 bg-white">

      <div className='text-center mb-10 sm:mb-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          Our <span className="text-orange-500 underline">Services</span></h2>
        <p className='text-gray-500 mt-3 text-sm sm:text-base'>Everything you need to grow your wealth smarter</p>
      </div>

      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map((item, index) => (
          <div
            key={index}
            className='p-6 bg-gray-50 rounded-xl hover:shadow-md transform hover:scale-105 transition-all duration-300 '
          >
            <h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
            <p className='text-gray-500 text-sm'>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services
