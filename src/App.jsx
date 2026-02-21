import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SignUp from './components/SignUp'


const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <Navbar setShowModal={setShowModal} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Home />
      {showModal && <SignUp setShowModal={setShowModal} setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )
}

export default App
