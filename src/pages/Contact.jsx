

// import React, { useState } from 'react';

// const Contact = () => {
//   // Define state for form fields
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you'd usually send the data to a server or email service
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div className='font-semibold'>
//       {/* Header Section */}
//       <div className='py-40 bg-black text-center text-white px-4'>
//         <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact us</h2>
//       </div>

//       {/* Contact Form Section */}
//       <div className='py-20 px-4 lg:px-20 bg-gray-100'>
//         <div className='max-w-2xl mx-auto'>
//           <h3 className='text-3xl font-semibold text-center mb-8'>We'd love to hear from you</h3>
//           <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
//             {/* Name Field */}
//             <div className='mb-4'>
//               <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
//                 Name
//               </label>
//               <input
//                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//                 id='name'
//                 type='text'
//                 name='name'
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder='Your name'
//                 required
//               />
//             </div>

//             {/* Email Field */}
//             <div className='mb-4'>
//               <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
//                 Email
//               </label>
//               <input
//                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//                 id='email'
//                 type='email'
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder='Your email address'
//                 required
//               />
//             </div>

//             {/* Message Field */}
//             <div className='mb-6'>
//               <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
//                 Message
//               </label>
//               <textarea
//                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//                 id='message'
//                 name='message'
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder='Your message'
//                 rows='5'
//                 required
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className='flex items-center justify-between'>
//               <button
//                 className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//                 type='submit'
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';

const Contact = () => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd usually send the data to a server or email service
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='font-semibold'>
      {/* Header Section */}
      <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h2>
        <p className='text-lg lg:text-xl mb-4'>We'd love to hear from you!</p>
      </div>

      {/* Contact Form Section */}
      <div className='py-20 px-4 lg:px-20 bg-gray-100'>
        <div className='max-w-2xl mx-auto'>
          <h3 className='text-4xl font-semibold text-center mb-8'>Get in Touch</h3>
          <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-lg p-8'>
            {/* Name Field */}
            <div className='mb-6'>
              <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500'
                id='name'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name'
                required
              />
            </div>

            {/* Email Field */}
            <div className='mb-6'>
              <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500'
                id='email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Your email address'
                required
              />
            </div>

            {/* Message Field */}
            <div className='mb-6'>
              <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                className='shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500'
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your message'
                rows='5'
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className='flex items-center justify-center'>
              <button
                className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-orange-300'
                type='submit'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

