import React, { useState } from 'react';

const Card = () => {
  return (
    <div className='max-w-[1240px] py-[1rem] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full border border-gray-200 shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300'>
        {/* Add image here */}
        <img
          src='bbbb.jpeg' // Replace 'your_image_url.jpg' with the actual URL or path of your image
          alt='Card Image'
          className=' mb-4 rounded-md'
          style={{ maxWidth: '100%', maxHeight: '200px' }} // Adjust the style based on your requirements
        />

        <div className='text-center text-1xl font-bold pt-3 border-b p-2'></div>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-3 font-bold uppercase'>Olukowe AI powered Application</p>
        </div>
        <button className='bg-[#559FFF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
          View
        </button>
      </div>


      <div className='w-full border border-gray-200 shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300'>
        {/* Add image here */}
        <img
          src='bbbb.jpeg' // Replace 'your_image_url.jpg' with the actual URL or path of your image
          alt='Card Image'
          className=' mb-4 rounded-md'
          style={{ maxWidth: '100%', maxHeight: '200px' }} // Adjust the style based on your requirements
        />

        <div className='text-center text-1xl font-bold pt-3 border-b p-2'></div>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-3 font-bold uppercase'>Olukowe AI powered Application</p>
        </div>
        <button className='bg-[#559FFF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
          View
        </button>
      </div>

      <div className='w-full border border-gray-200 shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300'>
        {/* Add image here */}
        <img
          src='bbbb.jpeg' // Replace 'your_image_url.jpg' with the actual URL or path of your image
          alt='Card Image'
          className=' mb-4 rounded-md'
          style={{ maxWidth: '100%', maxHeight: '200px' }} // Adjust the style based on your requirements
        />

        <div className='text-center text-1xl font-bold pt-3 border-b p-2'></div>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-3 font-bold uppercase'>Olukowe AI powered Application</p>
        </div>
        <button className='bg-[#559FFF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
          View
        </button>
      </div>

      
    </div>
  );
};

export default Card;
