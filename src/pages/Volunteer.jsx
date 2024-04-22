import React from 'react'
import Navbar from '../component/Navbar'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { MdEditLocation } from 'react-icons/md'
import Footer from '../component/Footer'


const Volunteer = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full py-16 px-4 bg-white'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <div className='flex flex-col item-center'>
                  <div>
                      <h1 className='text-3xl font-bold uppercase tracking-wide'>Volunteer Sign up page</h1>
                      <p className='pt-2 text-gray-400 text-justify text-md mr-6 font-semibold'>Join us in our mission to make quality education accessible to all children. Whether through volunteering, fundraising, or spreading awareness, there are many ways you can support our cause and make a difference in the lives of underprivileged children. Together, let's build a world where every child has the chance to learn, grow, and succeed.
                      Become a part of our dedicated team of volunteers and directly impact the lives of children in need. Whether you're interested in tutoring, mentoring, organizing events, or assisting with administrative tasks, your time and skills are invaluable in helping us create positive change.
                      Help us raise awareness about the importance of education and the challenges faced by underprivileged children in accessing it. Share our stories, campaigns, and impact on social media, and encourage others to join our cause. By amplifying our message, you can inspire others to take action and support our mission.</p>
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

                      <input type="email" placeholder='Your Email' className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]' />
                  </div>

                 <div>
                      <label className='text-sm'>Address</label>

                      <input type="text" placeholder='Your Address' className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]' />
                </div>

                <div>
                  <label className='text-sm'>Phone Number</label>

                  <input type="text" placeholder='Your Email' className='ring mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00df9a]' />
              </div>
                  <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Send</button>
              </form>
              </div> 
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Volunteer