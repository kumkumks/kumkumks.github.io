import React from 'react'

const Header = () => {
    return (
        <header className='p-3 sm:p-4 md:p-6'>
            <div className='mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center rounded-[28px] bg-radial from-[#4f0164] to-[#6a0cf7] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-14'>
                <div>
                    <h3 className='text-4xl font-italianno text-white/85 sm:text-5xl md:text-6xl'>Kumkum Sharma</h3>
                </div>

                <div className='mt-6 max-w-[18ch] sm:max-w-[20ch] md:max-w-[22ch]'>
                    <h1 className='text-5xl font-semibold italic leading-none tracking-tight text-amber-100 sm:text-6xl md:text-7xl lg:text-8xl'>FRONTEND DEVELOPER</h1>
                </div>

                <div className='mt-6 max-w-2xl md:mt-8'>
                    <p className='text-lg leading-relaxed text-gray-200 sm:text-xl md:text-2xl lg:text-3xl'>Building interfaces that look good and work even better.</p>
                </div>
            </div>
        </header>
    )
}

export default Header