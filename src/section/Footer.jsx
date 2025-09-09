import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono md-10">
            <div className="flex gap-10  p-4 justify-center text-white ">
                <a href="https://www.linkedin.com/in/vraj-patel-187464334/"
                className=" BORDER p-2 text-2xl rounded hover:translate-y-0.5 transition-all bg-blue-700 text-white"
                target="_blank"><FaLinkedin /></a>
                <a href="https://www.instagram.com/vrajpatel_7000?igsh=MXUxYWU1M21wcXloeA=="
                className=" BORDER p-2 text-2xl rounded hover:translate-y-0.5 transition-all bg-pink-600 text-white"
                target="_blank"
                ><FaInstagramSquare /></a>
            </div>
            <p> @ 2025 vraj. all rights reserved</p>
        </div>
    </footer>
  )

}

export default Footer