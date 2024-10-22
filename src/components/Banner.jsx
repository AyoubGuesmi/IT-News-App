import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to TechSphere</h1>
            <h1 className='text-1xl lg:text-3xl leading-snug font-bold mt-10 text-orange-600 inter-thick'>Your go-to destination for the latest in tech trends and innovations</h1>
            <div>
                {/* <a href='/' className='font-medium hover:text-orange-500 mt-200'>Learn more</a> */}
            </div>
        </div>
    </div>
  )
}

export default Banner