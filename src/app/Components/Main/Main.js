import React from 'react'

const Main = () => {
    return (
        <>
            <div className='grid grid-cols-4 gap-2 mx-17 h-100 mt-4'>
                <div className='bg-red-500  h-90'>1</div>
                <div className=' col-span-2 h-90 relative'>
                    <img src='/assets/Image/backgrounds/Banner-board-800x420 2.png' alt='main-banner' className='w-full h-90 object-cover' />
                    <div className='flex flex-col'>

                        <p className='absolute top-12 left-12 text-3xl font-normal'>Latest trending</p>
                        <p className='absolute top-21 left-12 text-4xl font-bold'>Electronic items</p>
                        <button className='absolute top-36 left-12 bg-white text-black font-medium px-4 py-2 rounded-md w-32'>Learn More</button>
                    </div>

                </div>
                <div className='bg-blue-500 h-90 grid-cols-1 grid-rows-3 gap-2'>
                    <div className="bg-yellow-500 row-span-2">1</div>
                    <div className="bg-green-500">2</div>
                    <div className="bg-green-500">2</div>
                </div>

            </div>
        </>
    )
}

export default Main
