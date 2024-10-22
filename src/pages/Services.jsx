import React from 'react';

const Services = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Our Services</h2>
        <p className='text-lg lg:text-xl leading-7 mb-8'>
          Providing IT news and insights to keep you informed.
        </p>
      </div>

      {/* Services Section */}
      <div className='max-w-6xl mx-auto py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* Service 1 */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl'>
            <h3 className='text-2xl font-bold text-gray-800 mb-3'>Daily News Updates</h3>
            <p className='text-gray-600 mb-4'>
              Stay updated with the latest trends and news in the IT industry. Our daily updates cover a wide range of topics
              from technology innovations to major industry shifts.
            </p>
            <a href="#" className='text-blue-600 hover:text-blue-800 font-semibold'>Learn More</a>
          </div>

          {/* Service 2 */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl'>
            <h3 className='text-2xl font-bold text-gray-800 mb-3'>In-Depth Analysis</h3>
            <p className='text-gray-600 mb-4'>
              Our expert analysts provide in-depth analysis of key issues and trends in the IT world, helping you to make
              informed decisions.
            </p>
            <a href="#" className='text-blue-600 hover:text-blue-800 font-semibold'>Learn More</a>
          </div>

          {/* Service 3 */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl'>
            <h3 className='text-2xl font-bold text-gray-800 mb-3'>Technology Reviews</h3>
            <p className='text-gray-600 mb-4'>
              Get the latest reviews on cutting-edge technology products and services to find the best solutions for your
              needs.
            </p>
            <a href="#" className='text-blue-600 hover:text-blue-800 font-semibold'>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

