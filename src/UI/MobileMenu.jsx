import { GiCrossMark } from "react-icons/gi";

function MobileMenu({IsMenuOpen,setIsMenuOpen}) {
  return (
    <div className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col 
    items-center justify-center transition-all duration-300 gap-1.5 ease-in-out ${
    IsMenuOpen 
    ? "h-screen opacity-100 pointer-events-auto" 
    :"h-0 opacity-0 pointer-events-none" }`}>


    <button onClick={()=>setIsMenuOpen(false)}
    className=" absolute top-5 right-5 text-2xl focus:outline-none cursor-pointer" aria-label="close menu">
        <GiCrossMark />
    </button>
    <a
    onClick={()=>setIsMenuOpen(false)}
     href="#home" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
        ${IsMenuOpen 
            ?"opacity-100 translate-y-0"
            :"opacity-0 translate-y-5"
        }`}>Home</a>

    <a 
    onClick={()=>setIsMenuOpen(false)}
    href="#about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
        ${IsMenuOpen 
            ?"opacity-100 translate-y-0"
            :"opacity-0 translate-y-5"
        }`}>About</a>

    <a 
    onClick={()=>setIsMenuOpen(false)}
    href="#projects" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
        ${IsMenuOpen 
            ?"opacity-100 translate-y-0"
            :"opacity-0 translate-y-5"
        }`}>Projects</a>

    <a
    onClick={()=>setIsMenuOpen(false)} 
    href="#contacts" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
        ${IsMenuOpen 
            ?"opacity-100 translate-y-0"
            :"opacity-0 translate-y-5"
        }`}>Contacts</a>

    </div>
  )
}

export default MobileMenu