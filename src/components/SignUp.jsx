import React, { useEffect, useState } from 'react'


const SignUp = ({ setShowModal, setIsLoggedIn }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [msg, setMsg] = useState("")

    const handleAdd = () => {
        if (!email || !password || !confirmPassword) {
            setError("Fill all fields first")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }
        setMsg("Account created successfully")

        setIsLoggedIn(true)
        setTimeout(() => {
            setShowModal(false)
        }, 1500)
    }

    useEffect(() => {
        if (!error) return;

        const timeout = setTimeout(() => {
            setError("")
        }, 2000)
        return () => clearTimeout(timeout)
    }, [error])

    return (
        <section className="fixed inset-0 bg-blue-950 bg-opacity-20 flex items-center justify-center z-50 px-4">

            <div className="w-full max-w-md bg-orange-100 p-8 rounded-2xl shadow-lg relative">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Account
                </h2>

                <div className="flex flex-col gap-4">

                    <input
                        type="email"
                        value={email}
                        placeholder="Email Address"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={(e) => setEmail(e.target.value)}
                    />


                    <input
                        type="password"
                        placeholder="password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />


                    <button onClick={handleAdd} className="bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer">
                        Sign Up
                    </button>


                    <button
                        className="absolute top-3 right-4 text-gray-500 text-xl cursor-pointer"
                        onClick={() => setShowModal(false)}
                    >
                        ✕
                    </button>

                    <p className='text-center text-red-500'>{error}</p>
                    <p className='text-center text-green-500'>{msg}</p>

                    <p className="text-xs text-gray-400 text-center">
                        By signing up, you agree to our terms & conditions.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default SignUp
