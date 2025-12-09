import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

export default function page() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Main/>
    </div>
  )
}
