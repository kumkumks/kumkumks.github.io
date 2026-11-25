import Badge from './badge'
import { motion } from 'motion/react'

const Contact = () => {
  return (
    <section className='mx-auto grid w-[min(92vw,75rem)] grid-cols-1 gap-5 rounded-[28px] bg-transparent px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-2 md:items-center md:px-10 lg:px-14'>
      <div className='min-w-0 w-full'>
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-xl font-semibold text-white sm:text-2xl md:text-2xl lg:text-3xl'>Where I build, share, and connect.</motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg text-white sm:text-xl md:text-xl lg:text-2xl'>Find me around the web.</motion.p>
      </div>
      <div className='w-full'>
        <Badge />
      </div>
    </section>
  )
}

export default Contact