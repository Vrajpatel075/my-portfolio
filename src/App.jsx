import React, { useState } from 'react'
import Navbar from './UI/Navbar'
import MobileMenu from './UI/MobileMenu'
import LodingScreenAnimation from './LodingScreenAnimation'
import Home from './section/Home' 
import AnimationWaves from './UI/AnimationWaves'
import About from './section/About'
import Projects from './section/Projects'
import { Contact } from './section/Contact'
import RevealOnScroll from './UI/RevealOnScroll'
import Footer from './section/Footer'

function App() {
  const [IsMenuOpen,setIsMenuOpen]=useState(false)
  const [IsLoading,setIsLoading]=useState(false)
  
  return (
   <>
      {!IsLoading && <LodingScreenAnimation OnComplate={()=>{setIsLoading(true)}}/>}
      <Navbar IsMenuOpen={IsMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <MobileMenu IsMenuOpen={IsMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <RevealOnScroll>
      <Home/>
      </RevealOnScroll>
      <AnimationWaves/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>

   </>

  )
}

export default App