import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";


const Navbar = ({ setShowModal, isLoggedIn, setIsLoggedIn }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScrol = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScrol);
        return () => window.removeEventListener("scroll", handleScrol)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "backdrop-blur-lg bg-black/40 shadow-lg"
            : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">

                <h3 className="text-3xl font-bold cursor-pointer select-none">
                    billio<span className="text-orange-500">.</span>
                </h3>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">

                    {["Home", "About Us", "Services", "Contact"].map(item => (
                        <button
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "")}`}
                            className="hover:text-orange-400 transition cursor-pointer"
                            onClick={() =>{
                                const sectionId = item.toLowerCase().replace(" ", "")
                                const section = document.getElementById(sectionId)

                                if(section) {
                                    section.scrollIntoView({ behavior: "smooth"})
                                }
                                setIsOpen(false)
                            }}
                        >
                            {item}
                        </button>
                    ))}


                    {isLoggedIn ? (
                        <button
                            onClick={() => setIsLoggedIn(false)}
                            className="bg-white text-orange-500 px-5 py-2 rounded-full font-bold hover:bg-orange-100 transition cursor-pointer">Logout</button>
                    ) : (

                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-white text-orange-500 px-5 py-2 rounded-full font-bold hover:bg-orange-100 transition cursor-pointer"
                        >
                            SIGN UP
                        </button>
                    )}

                </div>
                <button
                    aria-label="Toggle Menu"
                    className='md:hidden text-2xl z-50'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>

            </div>
            <AnimatePresence>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 md:hidden z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='md:hidden absolute top-full left-0 w-full  bg-blue-950 text-white flex flex-col items-center gap-6 py-6 shadow-xl z-50'>
                        {["Home", "About Us", "Services", "Contact"].map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                className='hover:text-orange-500 transition'
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}

                        {isLoggedIn ? (
                            <button onClick={() => {
                                setIsLoggedIn(false)
                                setIsOpen(false)
                            }}
                                className='bg-white text-orange-500 px-6 py-2 rounded-full font-bold hover:bg-orange-100 transition'
                            >
                                Logout
                            </button>
                        ) : (
                            <button onClick={() => {
                                setIsOpen(false)
                                setShowModal(true)
                            }}
                                className='bg-white text-orange-500 px-6 py-2 rounded-full font-bold hover:bg-orange-100 transition'
                            >
                                SIGN UP
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
