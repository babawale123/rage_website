import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Slider1 from '../component/Slider1'
import Slider2 from '../component/Slider2'
import Slider3 from '../component/Slider3'

const Causes = () => {
  return (
    <>
        <Navbar />
        <div className='w-full py-3 px-4 bg-white '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                
                <div className='flex flex-col justify-center'>
                        <h1 className='md:tex-4xl text-justify sm:text-3xl uppercase text-2xl font-bold py-2'>Infrastructure Development</h1>
                        <p className='text-justify'>At R.A.G.E, we believe that access to reliable infrastructure is essential for building thriving communities and promoting sustainable development. Our Infrastructure Development program is dedicated to improving infrastructure systems and facilities to enhance quality of life, foster economic growth, and address pressing social and environmental challenges.

                        Our mission is to plan, develop, and maintain infrastructure that meets the needs of present and future generations. We strive to create resilient, inclusive, and sustainable infrastructure that supports economic prosperity, social equity, and environmental stewardship.
                        
                        We conduct comprehensive assessments and analyses to identify infrastructure needs, priorities, and opportunities for improvement. Our planning efforts involve community engagement, stakeholder consultation, and data-driven decision-making to ensure that infrastructure projects are responsive to local needs and aspirations.
                        </p>
                </div>
                <Slider1 />
            </div>
         </div>

         <div className='w-full py-2 px-4 bg-black text-white '>
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <Slider2 />
             <div className='flex flex-col justify-center'>
                     <h1 className='md:tex-4xl text-justify sm:text-3xl uppercase text-2xl font-bold py-2'>Teachers Training & Recruitment</h1>
                     <p className='text-justify'>At R.A.G.E, we recognize the critical role that teachers play in shaping the future of our communities. Our Teachers Training & Recruitment program is dedicated to empowering educators with the skills, resources, and support they need to excel in the classroom and inspire lifelong learning.

                     Our mission is to ensure that every student has access to high-quality education by investing in the professional development and recruitment of skilled and passionate teachers. We believe that well-trained and motivated teachers are key to unlocking the potential of every learner and fostering academic success.
                     
                     We offer comprehensive training workshops and professional development opportunities for teachers at all stages of their careers. Our workshops cover a range of topics, including effective teaching strategies, classroom management techniques, innovative pedagogies, and technology integration.</p>
             </div>
            
         </div>
        </div>

        <div className='w-full py-2 px-4 bg-white '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            
            <div className='flex flex-col justify-center'>
                    <h1 className='md:tex-4xl sm:text-3xl uppercase text-2xl font-bold py-2'>Community Engagement and Outreach</h1>
                    <p className='text-justify'>At R.A.G.E, we believe that building strong relationships with the communities we serve is essential for creating positive social change. Our Community Engagement & Outreach initiatives are at the heart of our organization's mission to empower individuals and transform communities.
                    <br />
                    We strive to foster meaningful connections with community members, local leaders, and partner organizations. Through open communication, active listening, and collaborative partnerships, we work together to identify needs, strengths, and opportunities within the community.<br />
                    
                    We believe in the power of community participation and engagement. We provide platforms and opportunities for community members to voice their opinions, share their experiences, and actively participate in decision-making processes that affect their lives and communities.
                    
                    </p>
            </div>
            <Slider3 />
        </div>
       </div>
       <Footer />
    </>
  )
}

export default Causes