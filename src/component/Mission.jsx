import React from 'react'
import children from '../assets/children.jpg'
import Slider from './Slider'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <div className='w-full py-16 px-4 bg-white '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
             <Slider />
            <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>MISSION AND VISION</p> 
                    <h1 className='md:tex-4xl sm:text-3xl text-2xl font-bold py-2'>Mission and Vision statement</h1>
                    <p>"Our mission is to break the cycle of poverty and empower underprivileged children through education. We provide access to quality schooling and holistic support to children from marginalized communities, fostering their academic, social, and personal development."
                    <br />
                    Vision Statement:
                    "Our vision is a world where every child has the opportunity to receive a quality education, regardless of their background or circumstances. We envision empowered communities where education serves as a catalyst for positive change, unlocking the full potential of every child and building a brighter future for generations to come."</p>

                    <Link to='/volunteer' className='text-[#00df9a] text-center w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Voluteer</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Mission