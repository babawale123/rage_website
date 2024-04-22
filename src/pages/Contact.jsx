import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdEditLocation } from "react-icons/md";
import Footer from '../component/Footer'
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
            e.preventDefault()
            toast.success("Message sent successfully!! we will get back to you as soon as possible")
            console.log(name,email,message)
    }
  return (
    <div className='w-full py-16 px-4 bg-white'>
    <Toaster />
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
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                <div>
                    <label className='text-sm'>Full Name</label>

                    <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your name' className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]' />
                </div>

                <div>
                    <label className='text-sm'>Email</label>

                    <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]' />
                </div>

                <div>
                <label className='text-sm'>Message</label>
                    <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your Email' 
                    rows="4"
                    className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]'>
                    </textarea>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Send</button>
            </form>
        </div> 
        </div>
    </div>
  )
}

export default Contact