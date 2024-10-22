import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>News page</h2>
        <p className='text-lg lg:text-xl mb-4'>Stay updated with the latest insights and articles</p>
      </div>

      {/* all news/blogs container */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>

    </div>
  )
}

export default Blogs