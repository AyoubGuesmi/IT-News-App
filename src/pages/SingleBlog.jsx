import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'
import SideBar from '../components/SideBar'

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];
    
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Article page</h2>
      </div>

      {/* blog details */}
      <div className='max-w-7xl mx-auto my-12 flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-8'>{title}</h2>
          <div>
            <img src={image} alt="" className='w-full mx-auto rounded'/>
          </div>
          
          <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
          <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>

          {content.split('\n').map((paragraph, index) => (
          <p key={index} className='text-base text-gray-700 mb-6 leading-relaxed'>
          {paragraph}
          </p>
          ))}

          {/* <p className='text-base text-gray-700 mb-6'>{content}</p> */}
          
        </div>
        <hr className='mt-10'/>
        <div className='lg:w-1/2 mt-10'>
          <SideBar/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog