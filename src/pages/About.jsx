import React, { useState } from 'react'
import { BsChevronCompactRight,BsChevronCompactLeft } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';

const About = () => {

    const slider = [
        {url:'https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

        {url:'https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

        {url:'https://images.unsplash.com/photo-1664990594725-552201db8079?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

        {url:'https://www.shutterstock.com/image-photo/abuja-nigeria-june-6-2022-260nw-2169606685.jpg'},
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const IsFirstSlide = currentIndex === 0 
        const newSlide = IsFirstSlide ? slider.length - 1 : currentIndex - 1
        setCurrentIndex(newSlide)
    }

    const nextSlide = () => {
        const IsLastSlide = currentIndex === slider.length - 1
        const newSlide = IsLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newSlide)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

  return (
    <div>
   
    <div className='max-w-[1450px] h-[650px] w-full m-auto py-1 px-4 relative group'>
    <Navbar />
        <div style={{backgroundImage:`url(${slider[currentIndex].url})`}} className='bg-white w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>
        {/*left arrow*/}
        <div>
            <BsChevronCompactLeft onClick={prevSlide} size={30} className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' />
        </div>
         {/*Right arrow*/}
         <div>
            <BsChevronCompactRight onClick={nextSlide} size={30} className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slider.map((slide,index)=>(
                <div key={index} onClick={()=>goToSlide(index)} className='text-2xl cursor-pointer'>
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>

    <div className=' max-w-[1240px] text-justify mx-auto py-20'>
            <h1 className='text-3xl m-3 text-gray-300'>About us</h1>
            <p className='text-white m-3'>R.A.G.E was founded in [year] by a group of passionate individuals who shared a common vision: to empower underprivileged children through education. Inspired by the belief that every child deserves the chance to thrive, we set out on a mission to break the barriers that hinder access to quality schooling for marginalized communities.</p>

           <p className='text-white m-3'> <span className='text-2xl text-gray-300'>Our Mission</span> <br />
            At R.A.G.E, our mission is to break the cycle of poverty and transform lives through education. We are committed to providing comprehensive support and resources to underprivileged children, ensuring they have the opportunity to receive a quality education and realize their full potential.</p>
            
           <p className='text-white m-3'> <span className='text-2xl text-gray-300'>What We Do</span> <br />
            Through our sponsorship programs, we identify children facing financial hardship or other barriers to education and provide them with the support they need to attend school. This includes scholarships to cover tuition fees, as well as assistance with school supplies, uniforms, transportation, and other essentials. Additionally, we offer mentoring, tutoring, and extracurricular activities to support the holistic development of our sponsored children.
            
            We work closely with local schools, communities, and partners to create safe and nurturing learning environments where children can thrive academically, socially, and emotionally. By addressing the root causes of educational inequality, we aim to empower children to break free from the cycle of poverty and build a brighter future for themselves and their communities.</p>
            
           <p className='text-white m-3'><span className='text-2xl text-gray-300'>Our Impact</span> <br />
            Since our inception, R.A.G.E has touched the lives of thousands of children, helping them access education and unlock opportunities for a better future. We measure our success not only by the number of children we support but also by the positive transformations we witness in their lives. From improved academic performance to increased self-confidence and aspirations, we see the impact of our work every day in the smiles of the children we serve.</p>
            
           <p className='text-white m-3'> <span className='text-2xl text-gray-300'>Our Vision</span><br />
            Our vision is a world where every child has the opportunity to receive a quality education, regardless of their background or circumstances. We envision empowered communities where education serves as a catalyst for social change, breaking down barriers and creating pathways to a brighter and more equitable future for all.</p>
            
            <p className='text-white m-3'><span className='text-2xl text-gray-300'>Get Involved</span><br />
            Join us in our mission to make quality education accessible to all children. Whether through volunteering, fundraising, or spreading awareness, there are many ways you can support our cause and make a difference in the lives of underprivileged children. Together, let's build a world where every child has the chance to learn, grow, and succeed. <Link className='font-semibold'>click to me to get involve</Link></p>
    </div>
    </div>
  )
}

export default About