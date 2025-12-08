"use client"
import React from 'react'

const Navbar = () => {
  return (
    <>
    <navbar className="flex items-center justify-between  border-2 border-gray-200 py-4 px-4">
      <ul className="flex items-center gap-6 lg:ml-16 md:ml-12">
        <li>
          <select>
            <option value="option1">All Category</option>
            <option value="option1">Gadgets</option>
            <option value="option1">Clothes</option>
            <option value="option1">Accessories</option>
          </select>
        </li>
        <li><button>Hot offers</button></li>
        <li><button>Gift Boxes</button></li>
        <li><button>Projects</button></li>
        <li><button>Menu Item</button></li>
        <li>
          <select>
            <option value="option1">Help</option>
          </select>
        </li>
      </ul>

      <ul className='flex items-center justify-between flex items-center gap-6 mr-16'>
        <li>
          <select>
            <option value="option1">English,USD</option>
          </select>
        </li>
        <li>
          <select>
            <option value="option1">Ship to <img src='/public/assets/Layout1/Image/flags/RU@2x.png'/></option>
          </select>
        </li>
      </ul>

    </navbar>
    </>
  )
}

export default Navbar

