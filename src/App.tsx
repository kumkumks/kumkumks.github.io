import React from 'react'
import Navbar from './component/navbar'
import Header from './component/header'
import Card from './component/card'

const App = () => {
  return (
    <div className='h-screen w-screen text-black  '>
      <Navbar />
      <Header />
      <Card />
    </div>
  )
}

export default App