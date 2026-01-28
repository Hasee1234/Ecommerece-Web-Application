// import React from 'react'

// const Main = () => {
//     return (
//         <>
//             <div className='bg-white rounded-lg shadow-md grid grid-cols-4 gap-2 mx-17 h-100 mt-4 p-4'>
//                 <div className='bg-red-500  h-90'>1</div>
//                 <div className=' col-span-2 h-90 relative'>
//                     <img src='/assets/Image/backgrounds/Banner-board-800x420 2.png' alt='main-banner' className='w-full h-90 object-cover' />
//                     <div className='flex flex-col'>

//                         <p className='absolute top-12 left-12 text-3xl font-normal'>Latest trending</p>
//                         <p className='absolute top-21 left-12 text-4xl font-bold'>Electronic items</p>
//                         <button className='absolute top-36 left-12 bg-white text-black font-medium px-4 py-2 rounded-md w-32'>Learn More</button>
//                     </div>

//                 </div>
//                 <div className='bg-white h-90 grid grid-cols-1 grid-rows-[2fr_1fr_1fr] gap-2 '>
//                     <div className="bg-blue-300 flex ">
//                         <div className='flex'>
//                             <img className='h-13 m-4 rounded-4xl' src='https://as2.ftcdn.net/jpg/08/19/66/31/1000_F_819663119_che4sZSrmQv8uQJOzuN9TVQFQNHJlfQ2.jpg' />
//                             <p className="my-4 text-lg font-normal">
//                                 <span className="block">Hi, user</span>
//                                 <span className="block">let's get started</span>
//                             </p>
//                         </div>
//                            <div className="flex gap-2">
//       <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-md'>
//         Sign In
//       </button>
//       <button className='bg-white text-black font-medium px-4 py-2 rounded-md'>
//         Register
//       </button>
//     </div>
//                                               </div>
//                     <div className="bg-green-500">2</div>
//                     <div className="bg-green-500">3</div>
//                 </div>



//             </div>
//         </>
//     )
// }

// export default Main


import React from 'react'

const Main = () => {
    const categories = [
        'Automobiles',
        'Clothes and wear',
        'Home interiors',
        'Computer and tech',
        'Tools, equipments',
        'Sports and outdoor',
        'Animal and pets',
        'Machinery tools',
        'More category'
    ];

    return (
        <>
            <div className='bg-white shadow-md grid grid-cols-4 gap-6 mx-17 mt-4 p-4'>
                {/* Left Categories Sidebar */}
                <div className='flex flex-col h-full'>
                  
                    
                    {/* Simple Categories List */}
                    <div className='bg-white border border-gray-200 p-3 flex-grow'>
                        <div className='space-y-0'>
                            {categories.map((category, index) => (
                                <div 
                                    key={index}
                                    className='flex items-center justify-between p-2 hover:bg-gray-50 cursor-pointer'
                                >
                                    <span className='text-gray-700 font-normal'>
                                        {category}
                                    </span>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main banner - Fixed height reference */}
                <div className='col-span-2'>
                    <div className='relative h-full'>
                        <img 
                            src='/assets/Image/backgrounds/Banner-board-800x420 2.png' 
                            alt='main-banner' 
                            className='w-full h-full object-cover ' 
                            style={{ height: '390 px' }}
                        />
                        <div className='absolute inset-0 flex flex-col justify-center pl-12'>
                            <p className='text-3xl font-normal text-white mb-2'>Latest trending</p>
                            <p className='text-4xl font-bold text-white mb-6'>Electronic items</p>
                            <button className='bg-white text-black font-medium px-6 py-3  w-40 hover:bg-gray-100 transition'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right sidebar - Matches banner height */}
                <div className='flex flex-col h-full space-y-4'>
                    {/* User info section */}
                    <div className="bg-[#E3F0FF] p-5 flex-1 flex flex-col justify-between">
                        <div className='flex items-center'>
                            <img 
                                className='h-14 w-14  object-cover mr-4 border-2 border-white' 
                                src='https://as2.ftcdn.net/jpg/08/19/66/31/1000_F_819663119_che4sZSrmQv8uQJOzuN9TVQFQNHJlfQ2.jpg' 
                                alt='user'
                            />
                            <div>
                                <p className="font-bold text-gray-800 text-lg">Hi, user</p>
                                <p className="text-gray-600">let's get started</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button className='bg-blue-600 text-white font-medium px-4 py-2.5 rounded-md flex-1 hover:bg-[#002366] transition'>
                                Sign In
                            </button>
                            <button className='bg-white text-gray-700 font-medium px-4 py-2.5 rounded-md flex-1 border border-gray-300 hover:bg-gray-50 transition'>
                                Register
                            </button>
                        </div>
                    </div>
                    
                    {/* Get US$10 off section */}
                    <div className="bg-orange-400 text-white p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <div className='flex items-center gap-2 mb-2'>
                                <div className='w-6 h-6 bg-white  flex items-center justify-center'>
                                    <svg className="w-4 h-4 text-[#003087]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <p className='font-bold'>Get US$10 off</p>
                            </div>
                            <p className='text-sm opacity-90 pl-8'>with a new supplier</p>
                        </div>
                    
                    </div>
                    
                    {/* Send quotes section */}
                    <div className="bg-gradient-to-r from-[#e8f2ff] to-[#d4e7ff] p-5 flex-1 flex flex-col justify-between border border-blue-100">
                        <div>
                            <div className='flex items-center gap-2 mb-2'>
                                <div className='w-6 h-6 bg-[#003087]  flex items-center justify-center'>
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <p className='font-bold text-[#003087]'>Send quotes with</p>
                            </div>
                            <p className='text-sm text-gray-600 pl-8'>supplier preferences</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main