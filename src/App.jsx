import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Slider from './component/Slider'
import About from './pages/About'
import Volunteer from './pages/Volunteer'
import Donation from './pages/Donation'

function App() {

  return (
    <>
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slide" element={<Slider />} />
        <Route path="about" element={<About />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="donation" element={<Donation />} />
     </Routes>
    </>
  )
}

export default App
