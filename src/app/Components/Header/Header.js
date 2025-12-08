"use client"
import React, { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white w-full py-3 px-4 md:px-10 ">

      {/* TOP ROW */}


      <div className="flex items-center justify-between w-full flex-wrap ">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="md:hidden block"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/56/56763.png"
              className="h-6 w-6"
              alt="menu"
            />
          </button>

          {/* LOGO */}
          <img
            className="h-10 md:h-12 lg:ml-8 md:ml-6"
            src="/assets/Layout/Brand/logo-colored.png"
            alt="Brand"
          />
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center gap-5">

          {/* PROFILE */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            className="md:hidden h-6 w-6"
            alt="profile"
          />


          {/* EXTRA ACTIONS — visible only on desktop */}
          <div className="hidden md:flex items-center gap-6 text-gray-500">

            <button className="flex flex-col items-center text-xs">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" className="h-6 w-6" />
              <span>Profile</span>
            </button>
            <button className="flex flex-col items-center text-xs">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjW8ZgzjtfyW0oQvHWbIAYub6ujiMfH6SLqw&s" className="h-6 w-6" />
              <span>Message</span>
            </button>

            <button className="flex flex-col items-center text-xs">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwp0u_xZPds_8r6I1Y7IgkN4RxHtTZxQ0Yw&s" className="h-6 w-6" />
              <span>Orders</span>
            </button>

            <button className="flex flex-col items-center text-xs">
              <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" className="h-6 w-6" />
              <span>My Cart</span>
            </button>

          </div>
          {/* CART */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
            className="md:hidden h-6 w-6"
            alt="cart"
          />
        </div>

        {/* SEARCH BAR — full width on mobile, centered on desktop */}
        <form className="lg:w-160 md:w-130 sm:w-100 mt-3 md:mt-0 md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 flex border-2 border-blue-600 rounded-md">

          <input
            placeholder="Search"
            className="flex-1 px-3 py-1"
          />

          <select className="border-l border-blue-600 px-2 py-1">
            <option>All Category</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>

          <button className="bg-blue-600 text-white px-4 py-1">
            Search
          </button>

        </form>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="mt-3 flex flex-col gap-3 text-gray-700 md:hidden">

          <button className="flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/565/565340.png" className="h-5 w-5" />
            <span>Message</span>
          </button>

          <button className="flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png" className="h-5 w-5" />
            <span>Orders</span>
          </button>

          <button className="flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" className="h-5 w-5" />
            <span>My Cart</span>
          </button>

        </div>
      )}
    </header>
  )
}
