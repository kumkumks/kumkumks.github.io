import { motion } from 'motion/react'

const Navbar = () => {
  return (
    <div className='flex p-4 '>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <a href='#' className='text-amber-500 font-italianno text-3xl font-medium'>KumKum Sharma</a>
      </motion.div>
    </div>
  )
}

export default Navbar