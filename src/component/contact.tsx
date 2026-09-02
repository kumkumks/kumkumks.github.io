import Badge from './badge'

const Contact = () => {
  return (
    <div className='mx-auto flex flex-wrap min-h-[20vh] min-w-5xl rounded-[28px] bg-radial from-[#ff9b74] to-[#ab4313] px-5 py-8 sm:px-8 sm:py-10  md:px-10 lg:px-14'>
        <div className='flex-1'>
             <h3 className='text-xl font-semibold text-black sm:text-2xl md:text-3xl'>Where I build, share, and connect.</h3>
             <p className='text-lg text-gray-700  sm:text-xl md:text-2xl'>Find me around the web.</p>
        </div>
        <Badge />
    </div>
  )
}

export default Contact