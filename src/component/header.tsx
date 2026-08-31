import React from 'react'
import { motion } from 'motion/react'
const Header = () => {
    return (
        <div className='h-[80%]  bg-[linear-gradient(45deg,_#a53103,_#d37416,_#fde10c)] p-5 rounded-2xl text-white m-3'>
            <motion.div
                animate={{ opacity: [0, 0.5, 1], y: [-50, 0] }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className='flex flex-col justify-center items-center h-full gap-4'>
                <p className='text-5xl font-bold'>Frontend Developer & UI Designer</p>
                <p className='text-lg font-semibold'>I design interfaces and build them into real products.
                    I create clean, responsive web experiences with a focus on thoughtful UI, usability,
                    and frontend development.</p>
            </motion.div>
        </div>
    )
}

export default Header