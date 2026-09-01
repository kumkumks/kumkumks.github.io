import React from 'react'

const Header = () => {
    return (
        <div className='p-3'>
            <div className='flex flex-col  h-screen bg-radial from-[#4f0164] to-[#6a0cf7] rounded-2xl p-5'>
                <div>
                    <h3 className='text-5xl font-italianno text-white opacity-80'>Kumkum Sharma</h3>
                </div>
                <div className='w-70'>
                    <h1 className='text-9xl font-italic font-semibold text-amber-100 mt-19'>FRONTEND DEVELOPER</h1>
                </div>
                <div className='w-2/3 mt-10'>
                    <p className='text-5xl text-gray-300'>Building interfaces that look good and work even better.</p>
                </div>
            </div>
        </div>
    )
}

export default Header