import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Frame6 from './Components/Frame6'
import Frame5 from './Components/Frame5'

const App = () => {
  return (
    <div className='bg-[#FFFFFF] w-[1934px] h-[1075px] top-[-747px] left-[300px]'>
      <Navbar/>
      <Main/>
      <Navbar/>
      <Frame6/>
      <Frame5/>
    </div>
  )
}

export default App