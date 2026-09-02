const Header = () => {
    return (
        <header className='w-full'>
            <div className='mx-auto flex min-h-[50vh] flex-col justify-center bg-radial from-[#4f0164] to-[#6a0cf7] px-5 py-30 sm:px-8 sm:py-8 md:px-15 lg:px-10 sm:min-h-[80vh]'>
                <div>
                    <h3 className='text-4xl font-italianno text-white/85 sm:text-5xl md:text-5xl lg:text-6xl'>Kumkum Sharma</h3>
                </div>

                <div className='mt-6 max-w-[18ch] sm:max-w-[20ch] md:max-w-[16ch] lg:max-w-[20ch]'>
                    <h1 className='text-4xl font-semibold italic leading-none tracking-tight text-amber-100 sm:text-5xl md:text-6xl lg:text-7xl'>FRONTEND DEVELOPER</h1>
                </div>

                <div className='mt-6 max-w-xl md:mt-8 md:max-w-2xl'>
                    <p className='text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl lg:text-2xl'>Building interfaces that look good and work even better.</p>
                </div>
            </div>
        </header>
    )
}

export default Header