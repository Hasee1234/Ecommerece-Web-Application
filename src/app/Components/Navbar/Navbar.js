// "use client"
// import React,{useState} from 'react'

// const Navbar = () => {
//   const countries = [
//   {
//     value: "ru",
//     label: "Russia",
//     flag: "/assets/Layout1/Image/flags/RU@2x.png",
//   },
//   {
//     value: "us",
//     label: "United States",
//     flag: "/assets/Layout1/Image/flags/US@2x.png",
//   },
//   {
//     value: "uk",
//     label: "United Kingdom",
//     flag: "/assets/Layout1/Image/flags/UK@2x.png",
//   },
// ];
// const [selectedCountry, setSelectedCountry] = useState(countries[0]);


//   return (
//     <>
//     <navbar className="flex items-center justify-between  border-2 border-gray-200 py-4 px-4">
//       <ul className="flex items-center gap-6 lg:ml-16 md:ml-12">
//         <li>
//           <select>
//             <option value="option1">All Category</option>
//             <option value="option1">Gadgets</option>
//             <option value="option1">Clothes</option>
//             <option value="option1">Accessories</option>
//           </select>
//         </li>
//         <li><button>Hot offers</button></li>
//         <li><button>Gift Boxes</button></li>
//         <li><button>Projects</button></li>
//         <li><button>Menu Item</button></li>
//         <li>
//           <select>
//             <option value="option1">Help</option>
//           </select>
//         </li>
//       </ul>

//       <ul className='flex items-center justify-between flex items-center gap-6 mr-16'>
//         <li>
//           <select>
//             <option value="option1">English,USD</option>
//           </select>
//         </li>
//         <li>
//           <select>
//             <option value="option1">Ship to <img src='/public/assets/Layout1/Image/flags/RU@2x.png'/></option>
//           </select>
//         </li>
//       </ul>

//     </navbar>
//     </>
//   )
// }

// export default Navbar

"use client"
import React, { useState } from "react";


const Navbar = () => {

  const countries = [
    {
      value: "ru",
      label: "Russia",
      flag: "/assets/Layout1/Image/flags/RU@2x.png",
    },
    {
      value: "us",
      label: "United States",
      flag: "/assets/Layout1/Image/flags/US@2x.png",
    },
    {
      value: "cn",
      label: "china",
      flag: "/assets/Layout1/Image/flags/CN@2x.png",
    },
    {
      value: "it",
      label: "italy",
      flag: "/assets/Layout1/Image/flags/IT@2x.png",
    },
    {
      value: "As",
      label: "Australia",
      flag: "/assets/Layout1/Image/flags/icon.png",
    },
    {
      value: "GB",
      label: "Great Britain",
      flag: "/assets/Layout1/Image/flags/GB@2x.png",
    },
    {
      value: "FR",
      label: "France",
      flag: "/assets/Layout1/Image/flags/FR@2x.png",
    },
    {
      value: "DK",
      label: "Denmark",
      flag: "/assets/Layout1/Image/flags/DK@2x.png",
    },
    {
      value: "Gy",
      label: "Germany",
      flag: "/assets/Layout1/Image/flags/DE@2x.png",
    },
    {
      value: "UAE",
      label: "UAE",
      flag: "/assets/Layout1/Image/flags/AE@2x.png",
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <>
      <navbar className="flex items-center justify-between border-1 border-gray-200 py-4 px-4">

        {/* LEFT MENU */}
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

        {/* RIGHT MENU */}
        <ul className="hidden md:flex items-center gap-6 mr-16 ">

          {/* Language & Currency */}
          <li>
            <select>
              <option value="option1">English, USD</option>
            </select>
          </li>

          {/* Country Dropdown with Dynamic Flag */}
          <li className="flex items-center gap-2">

            {/* Flag (dynamic) */}
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.label}
              className="w-6 h-auto"
            />

            {/* Country Select */}
            <select
              value={selectedCountry.value}
              onChange={(e) => {
                const newCountry = countries.find(
                  (c) => c.value === e.target.value
                );
                setSelectedCountry(newCountry);
              }}
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                               {country.label}
                </option>
              ))}
            </select>

          </li>
        </ul>

      </navbar>
    </>
  );
};

export default Navbar;
