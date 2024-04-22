import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdEditLocation } from "react-icons/md";
import Footer from '../component/Footer'


const Contact = () => {
  return (
    <div className='w-full py-16 px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col item-center'>
                <div>
                    <h1 className='text-4xl font-bold tracking-wide'>Contact Us</h1>
                    <p className='pt-2 text-gray-400 text-justify text-md font-semibold'>You can contact us through any of the following means. <br />
                    Be it phone, email or come to our address or location</p>
                </div>
                <div className="mt-6">
                    <div className='flex items-center p-3'>
                        <FaPhoneAlt size={22} className='mr-3' />
                        <span>(+234) 808 848 4874</span>
                    </div>

                    <div className='flex items-center p-3'>
                        <IoMdMail size={22} className='mr-3' />
                        <span>theragengo@gmail.com</span>
                    </div>

                    <div className='flex items-center p-3'>
                        <MdEditLocation size={22} className='mr-3' />
                        <span>No 10 Garki, Zone 2, Abuja.Nigeria</span>
                    </div>
                </div>
              
            </div>

            <div className='text-gray-600 '>
            <form className='flex flex-col space-y-4'>
                <div>
                    <label className='text-sm'>Full Name</label>

                    <input type="text" placeholder='Your name' className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]' />
                </div>

                <div>
                    <label className='text-sm'>Email</label>

                    <input type="text" placeholder='Your Email' className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]' />
                </div>

                <div>
                <label className='text-sm'>Message</label>
                    <textarea placeholder='Your Email' 
                    rows="4"
                    className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]'>
                    </textarea>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Send</button>
            </form>
        </div> 
        </div>
        <Footer />
    </div>
  )
}

export default Contact