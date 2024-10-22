

import React from 'react';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Us</h2>
        <p className='text-lg lg:text-xl mb-4'>Discover who we are and what drives us</p>
      </div>
      
      {/* About Content Section */}
      <div className='bg-gray-50 py-10'>
        <div className='max-w-7xl mx-auto text-gray-600 font-semibold leading-7 px-4 lg:px-20'>
          <h1 className='text-orange-500 text-4xl'>About Us</h1>
          <div className='mt-5 mb-10'>
            <p>
              Welcome to <span className='text-black'>Tech</span><span className='text-orange-500'>Sphere</span>, your go-to source for the latest news, trends, and analysis in the world of technology. We are passionate about bringing you accurate, up-to-date information on all things tech, from cutting-edge innovations to industry shifts that impact our daily lives.
            </p>
          </div>

          <h1 className='text-orange-500 text-4xl mt-10'>Who We Are</h1>
          <div className='mt-5 mb-10'>
            <p>
              At <span className='text-black'>Tech</span><span className='text-orange-500'>Sphere</span>, we are a team of tech enthusiasts, journalists, and industry experts dedicated to providing quality content. Our mission is to deliver thoughtful, in-depth analysis and coverage of the technology sector—whether it’s emerging startups, breakthrough AI advancements, software development, or the latest consumer gadgets.
            </p>
          </div>

          <h1 className='text-orange-500 text-4xl mt-10'>Our Mission</h1>
          <div className='mt-5 mb-10'>
            <p>
              In today’s rapidly evolving digital world, staying informed is crucial. Our goal is to bridge the gap between technology and people by offering insights and news that help readers understand how technology impacts business, society, and their personal lives.
            </p>
          </div>

          <h1 className='text-orange-500 text-4xl mt-10'>Why Choose Us?</h1>
          <div className='mt-5 mb-10'>
            <p>
              What sets <span className='text-black'>Tech</span><span className='text-orange-500'>Sphere</span> apart is our commitment to delivering unbiased, well-researched content. We believe in transparency, providing you with honest reviews, detailed analysis, and thoughtful perspectives on the issues that matter most in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
