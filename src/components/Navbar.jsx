import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion'



const Navbar = () => {


    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Company'
        },
        {
            id: 3,
            link: 'Resources'
        },
        {
            id: 4,
            link: 'About'
        },
        {
            id: 5,
            link: 'Contact'
        },

    ]

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
        <motion.div className=' text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 10}}>
            <h1 className=' w-full text-3xl font-bold text-[#00df9a] uppercase'>React</h1>

            <ul className=' md:flex hidden'>
                {links.map(({ id, link }) => 
                    <motion.li key={id} className='p-4 cursor-default hover:text-gray-500' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ type: "spring", stiffness: 1000, damping: 15}}>
                        {link}
                    </motion.li>
                )}
            </ul>

            <div onClick={handleNav} className=' block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
            </div>
        </motion.div>
        
        <motion.div animate={{ x: nav ? -300 : 0, opacity: 1 }} initial={{ opacity: 0.1, x: -300 }} transition={{ type: "spring", stiffness: 500, damping: 40}} className= ' text-white fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] block md:hidden'>

                <h1 className=' w-full text-3xl font-bold text-[#00df9a] uppercase mx-4 my-[1.9rem]'>React</h1>

                <ul className=' uppercase'>
                    {links.map(({ id, link }) =>
                        <li key={id} className='cursor-default p-4 border-b border-b-gray-600 hover:text-gray-500 '>
                            <div>
                                {link}
                            </div>
                            
                        </li>
                    )}
                </ul>
        </motion.div>

    </div>
  )
}

export default Navbar