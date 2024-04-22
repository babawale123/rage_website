import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] mx-auto w-full h-screen flex flex-col justify-center text-center'>
          <p className='font-bold uppercase md:text-2xl'></p>
          <p className='text-[#00df9a] text-2xl font-bold'>(R.A.G.E)</p>
          <p className='text-[#FFFFFF] font-bold p-3 md:text-4xl sm:text-3xl uppercase text-5xl'>Rights and Aid Group for Education</p>
          <p className='text-[#FFFFFF] text-2xl font-bold uppercase'>Free <Typewriter words={['education for one million Nigerian children','Tutor fee paid by R.A.G.E']} loop={true} /> </p>

          <p className='md:text-2xl text-xl font-bold text-gray-500'>Providing Free Education For One million Nigerian children between the ages of 3 to 17 years</p>
          <Link to='/donation' className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Make Donation</Link>
        </div>
    </div>
  )
}

export default Hero