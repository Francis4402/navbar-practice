import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion'



const Navbar = () => {

    const sidebaranimation = {
        
        open: {
            width: "16rem",
            transition: {
                damping: 40,
            },
        },

        close: {
            width: "0rem",
            transition: {
                damping: 40,
            },
        }
    }

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
            id: 1,
            link: 'Resources'
        },
        {
            id: 1,
            link: 'About'
        },
        {
            id: 1,
            link: 'Contact'
        },

    ]

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (

    <div className=' text-white'>
        <div>
            <h1>React</h1>

            <ul>
                {links.map(({ id, link }) => 
                    <li key={id}>
                        {link}
                    </li>
                
                )}
            </ul>
        </div>
    </div>

  )
}

export default Navbar