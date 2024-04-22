import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Mission from '../component/Mission'
import Newletter from '../component/Newletter'
import Footer from '../component/Footer'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Mission />
    <Newletter />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home