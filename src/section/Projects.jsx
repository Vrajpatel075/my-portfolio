import { useState } from "react"
import golfsite from '../assets/golf site thumbnail.png'
import weatherapp from '../assets/weather app thumbnail.jpeg'
import blogapp from '../assets/blog app thumbnail.jpeg'
import animaxx from '../assets/animax thumbnail.png'
// import profileImg from "../assets/sprited-away-poster.jpg"
// import RevelOnScroll from "../UI/RevelOnScroll";
import RevealOnScroll from "../UI/RevealOnScroll"

function Projects() {
    const [projects]=useState([
        {image:animaxx, 
        name:"Animaxx" , 
        brief:"Animaxx is a vibrant anime discovery hub where fans can explore, save, and share their favorite characters, UI designs, and creative inspirations, it blends Pinterest-style visuals with full-stack functionality—perfect for showcasing anime art.",
         tags: ["React", "HTML", "CSS", "Routing"]
    },

        {image:blogapp, 
        name:"Blog App" , 
        brief:"Blog App is a modern web platform for sharing tutorials, insights, and coding tips across HTML, CSS, JavaScript, and React. Designed with a clean UI and dynamic card layout, it helps users explore web development topics with ease and style..",
        tags: ["React", "CSS", "HTML", "Routing"]
    },

        {image:weatherapp, 
        name:"Weather App" , 
        brief:"Weather App is a sleek, responsive platform that lets users check real-time weather conditions by city. It fetches data from the OpenWeatherMap API and displays temperature, wind speed, humidity, and weather icons with smooth UI transitions. Designed with HTML, CSS, and JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"]
    },
        
        {image:golfsite   , 
        name:"Golfsite" , 
        brief:"Sidcup Family Golf is a vibrant destination for all ages, blending sport, leisure, and adventure. Whether you're teeing off at the Toptracer Range, mastering your swing with expert lessons, or exploring dinosaur-themed Adventure Golf.",
        tags: ["HTML", "CSS" , "Javascript" , "GSAP"]
    }
    ]);
  return (
    <section id="projects" className="min-h-screen flex items-center font-mono justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">Features Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project,index)=>(
                    <div key={index} className="p-6 rounded flex flex-col items-center border-2
                     border-white/10 hover:border-blue-500 hover:shadow-[9_2px_8px_rgba(180,0,246,0.8)]
                     hover:translate-y-1 transition-all hover:bg-cyan-900">
                        
                        <h3 className="font-semibold text-xl mb-4 ">
                            {project.name}</h3>
                        <p className="text-gray-300 mb-4 ">
                            {project.brief}</p>
                       <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                          {project.tags.map((tech, index) => (
                            <span key={index}
                            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition">{tech}
                            </span>
                        ))}
                        </div>

                            <div 
                            className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer rounded-xl">
                            
                            <p
                             className="text-gray-200">View Projects
                            </p>
                            
                            <a href="https://github.com/Vrajpatel075" 
                            className="flex justify-between items-center font-bold text-blue-400  transition-colors
                            hover:text-white">
                                <img src={project.image} 
                                alt={`${project.name}`}/>
                            </a>
                            
                            </div>
                     </div>
                ))}
            </div>
        </div>
        </RevealOnScroll>

    </section>
  )
}

export default Projects