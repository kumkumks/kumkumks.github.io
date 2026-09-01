import React from 'react'
import Navbar from './component/navbar'
import Header from './component/header'
import Project from './pages/project'
import Footer from './component/footer'

const App = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-[#f6f2ff] text-slate-900'>
      {/* <Navbar /> */}
      <Header />
      <Project />
      <Footer />
    </div>
  )
}

export default App