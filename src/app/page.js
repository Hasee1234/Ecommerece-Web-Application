import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

export default function page() {
  return (
    <div >
      <Header/>
      <Navbar/>
      <div className='bg-gray-100 min-h-screen p-6'>

      <Main />
      </div>
    </div>
  )
}
