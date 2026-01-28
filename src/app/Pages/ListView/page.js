"use client"
import BreadCrumb from '@/app/Components/BreadCrumb/BreadCrumb'
import Header from '@/app/Components/Header/Header'
import Navbar from '@/app/Components/Navbar/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className='bg-gray-100 min-h-screen p-6 '>
        <BreadCrumb/>
        </div>
    </div>
  )
}

export default Page