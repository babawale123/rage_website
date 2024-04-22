import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Newletter = () => {

    const [news, setNews] = useState("")
   

    const handleSubmit = (e) => {
            e.preventDefault()
            toast.success("You have successfully subscribe to our newsletter!!! stay tuned for more updates.")
            console.log(email)
    }
  return (
    <div className='w-full py-16 text-white px-4'>
    <Toaster />
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to know more About us</h1>
            <p>sign up for our newslwtter and stay updated</p>
          </div>

          <div className='my-4'>
            <div className='flex flex-col sm:flex-row w-full items-center justify-between'>
                <input value={news} onChange={(e)=>setNews(e.target.value)} className='w-full p-3 rounded-md text-black' type="email" placeholder="Email address" />
                <button onClick={handleSubmit} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 mx-auto py-3 text-black'>Notify me</button>
            </div>
            <p>By subscribing to our newsletter you get all notification at real time <span className='text-[#00df9a]'>terms and condition apply</span></p>
          </div>
        </div>    
    </div>
  )
}

export default Newletter