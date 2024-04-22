import React from 'react'
import {
    FaInstagram,
    FaGithubSquare,
    FaFacebookSquare,
    FaTwitterSquare,
    FaDribbbleSquare,

 } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='max-w-[1240px] py-16 mx-auto px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src='img/rage.png' width={100} alt='logo' />
        <p className='py-4'>We provide access to quality schooling and holistic support to children from marginalized communities, fostering their academic, social, and personal development</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={28} className='m-2' />
            <FaTwitterSquare size={28} className='m-2' />
            <FaInstagram size={28} className='m-2' />
            <FaGithubSquare size={28} className='m-2' />
            <FaDribbbleSquare size={28} className='m-2' />
        </div>
      </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>

            <div>
                <h6 className='font-medium text-gray-300'>More links</h6>
                <ul>
                    <li className='py-2 text-sm'><Link to='/'>Home</Link></li>
                    <li className='py-2 text-sm'><Link to=''>About</Link></li>
                    <li className='py-2 text-sm'><Link to=''>Volunteer</Link></li>
                    <li className='py-2 text-sm'><Link to=''>Causes</Link></li>
                    <li className='py-2 text-sm'><Link to=''>Make Donation</Link></li>
                </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-300'>Supports</h6>
            <ul>
                <li className='py-2 text-sm'><Link to='/'>Home</Link></li>
                <li className='py-2 text-sm'><Link to=''>About</Link></li>
                <li className='py-2 text-sm'><Link to=''>Volunteer</Link></li>
                <li className='py-2 text-sm'><Link to=''>Causes</Link></li>
                <li className='py-2 text-sm'><Link to=''>Make Donation</Link></li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-300'>Career</h6>
            <ul>
                <li className='py-2 text-sm'><Link to='/'>Home</Link></li>
                <li className='py-2 text-sm'><Link to=''>About</Link></li>
                <li className='py-2 text-sm'><Link to=''>Volunteer</Link></li>
                <li className='py-2 text-sm'><Link to=''>Causes</Link></li>
                <li className='py-2 text-sm'><Link to=''>Make Donation</Link></li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-300'>Policy</h6>
            <ul>
                <li className='py-2 text-sm'><Link to='/'>Home</Link></li>
                <li className='py-2 text-sm'><Link to=''>About</Link></li>
                <li className='py-2 text-sm'><Link to=''>Volunteer</Link></li>
                <li className='py-2 text-sm'><Link to=''>Causes</Link></li>
                <li className='py-2 text-sm'><Link to=''>Make Donation</Link></li>
            </ul>
        </div>
        
        </div>
    </div>
  )
}

export default Footer