import React, { useState } from 'react'
import { BsChevronCompactRight,BsChevronCompactLeft } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

const Slider2 = () => {

    const slider = [
        {url:'https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

        {url:'https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

        {url:'https://images.unsplash.com/photo-1664990594725-552201db8079?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},        
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
    <>
    <div className='max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group'>
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
    </>
  )
}

export default Slider2