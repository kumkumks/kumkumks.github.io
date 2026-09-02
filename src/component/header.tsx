import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.header className='w-full'
            initial='hidden' animate='visible'
        >
            <div className='mx-auto flex min-h-[50vh] flex-col justify-center bg-radial from-[#4f0164] to-[#6a0cf7] px-5 py-30 sm:px-8 sm:py-8 md:px-15 lg:px-10 sm:min-h-[80vh]'>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='mb-2 sm:mb-3 md:mb-4 lg:mb-5'>
                    <h3 className='text-4xl font-italianno text-white/85 sm:text-5xl md:text-5xl lg:text-6xl'>Kumkum Sharma</h3>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className='mt-2 sm:mt-3 md:mt-4 lg:mt-5'>
                    <h1 className='text-4xl font-semibold italic leading-none tracking-tight text-amber-100 sm:text-5xl md:text-6xl lg:text-7xl'>FRONTEND DEVELOPER</h1>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <p className='text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl lg:text-2xl'>Building interfaces that look good and work even better.</p>
                </motion.div>
            </div>
        </motion.header>
    )
}

export default Header