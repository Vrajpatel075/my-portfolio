import React from 'react'
import profileImg from "../assets/profile-picture.jpeg"
import { MdOutlineFileDownload } from "react-icons/md";
import resume from '../assets/Vraj patel Java full stack developer Cv.pdf'

function Home() {
  return (
    <section id='home' className='min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 overflow-x-hidden'>
      
      <div className='text-center z-10 px-4'>
        <img
         className='w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-black/70 lg:m-0 lg:max-w-[200px]
         object-cover object-bottom hover:-translate-y-1 transition-all'
         src={profileImg} alt="Profile Img" />
      </div>

      <div className='text-center font-mono z-10 px-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl lg:max-w-[500px] font-semibold mb-6 px-1
        bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent'>
        I am Vraj Patel</h1>
        
        <p className='text-gray-300 text-lg mb-8 max-w-lg mx-auto'>
          A Java Fullstack Web Developer who loves to create interactive, scalable web applications. My purpose is to build dynamic UIs, high performance, and delightful UX, with the best ways to store and optimise the data.
        </p>

        <div className='flex justify-center items-center space-x-4 '>
          <a className='bg-white text-pink-950 py-3 px-4 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-lg' href="#contact">
            Contact Me
          </a>
          
          <a className='bg-white text-pink-950 py-3 px-4 rounded flex font-medium transition transform hover:-translate-y-1 hover:shadow-lg' href={resume} download>
            <p>Resume</p>
            <span className='h-5 ml-3 text-2xl'><MdOutlineFileDownload /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
