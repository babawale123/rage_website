import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState()

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center max-w-[1240px]  mx-auto px-4 h-24 text-white '>
       
        <img src='img/rage.png'className='mb-3' width={100} alt='logo' />
        <div>
            <ul className='hidden md:flex'>
                <li className='p-3'><Link to='/'>Home</Link></li>
                <li className='p-3'><Link to='/about'>About</Link></li>
                <li className='p-3'><Link to='/volunteer'>Volunteer</Link></li>
                <li className='p-3'><Link to=''>Causes</Link></li>
                <li className='p-3'><Link to='/donation'>Make Donation</Link></li>
            </ul>

            <div className='block md:hidden' onClick={handleNav}>{nav ? <AiOutlineClose size={20} /> :<AiOutlineMenu size={20} />} 
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed  top-0 left-0 w-full border-r border-r-gray-600 h-full mt-20 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%]'}>
            <ul className='p-10 uppercase'>
                <li className='p-3 border-b border-gray-600'>Home</li>
                <li className='p-3 border-b border-gray-600'>About</li>
                <li className='p-3 border-b border-gray-600'>Volunteer</li>
                <li className='p-3 border-b border-gray-600'>Causes</li>
                <li className='p-3'>Make Donation</li>     
            </ul>
        </div>
    </div>
  )
}

export default Navbar