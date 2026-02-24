import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [successMsg, setSuccessMsg] = useState("")


  const handleClick = () => {
    if (!name || !email || !message) {
      setError("Please Fill all Fields")
      return
    }
    setSuccessMsg("Thanks for Contacting,We Will respond you within 24 hours")
    setTimeout(() => {
      setSuccessMsg("")
    }, 2000)
  }


  useEffect(() => {
    if (!error) return
    const timeout = setTimeout(() => {
      setError("")
    }, 2000)
    return () => clearTimeout(timeout)
  }, [error])

  useEffect(() => {
    if (!successMsg) return

    const timeout = setTimeout(() => {
      setSuccessMsg("")
    }, 2000)
    return () => clearTimeout(timeout)
  }, [successMsg])

 
  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-white">

      <div className="text-center mb-10 sm:mb-12">
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          <span className='text-orange-500'>Contact</span> Us</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          We’d love to hear from you
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm">

        <div className="flex flex-col gap-5">

          <input
            type="text"
            value={name}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400
            text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <textarea
            type=""
            value={message}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400
            min-h-30 resize-none text-sm sm:text-base"
            onChange={(e) => setMessage(e.target.value)}
          />

          {error && <p className='text-center text-red-500 text-sm'>{error}</p>}
          {successMsg && <p className='text-center text-green-500 text-sm'>{successMsg}</p>}

          <button onClick={handleClick} className="bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 cursor-pointer">
            Send Message
          </button>

        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-6">
        We usually respond within 24 hours
      </p>

    </section>
  )
}

export default Contact
