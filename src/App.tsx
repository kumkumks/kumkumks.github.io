import React from 'react'
import Navbar from './component/navbar'
import Header from './component/header'
import Project from './pages/project'

const App = () => {
  return (
    <div className='h-screen w-max-content'>
      {/* <Navbar /> */}
      <Header />
      <Project />
    </div>
  )
}

export default App