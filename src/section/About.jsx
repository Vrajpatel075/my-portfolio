import RevealOnScroll from "../UI/RevealOnScroll"
import certificates from "../assets/sevenmentor certificate of vraj deepak patel.pdf"
import { MdOutlineFileDownload } from "react-icons/md";

function About() {
  const skills = [
    "Html","Css","Javascript","React","Java","TailwindCSS","Node Js","Bootstrap",
    "Spring Boot","Spring Framework","Spring MVC","RESTfull APIs","SQL"
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-6"
    >
      <RevealOnScroll>
        <div className="w-full md:w-3xl px-4 mx-auto">
          <h2 className="max-w-3xl text-3xl sm:text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="p-6 sm:p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-5 text-base sm:text-lg md:text-xl">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl sm:text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm sm:text-base hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl sm:text-2xl text-center font-bold mb-8">📚 Education</h3>
              <ul className="pl-5 list-disc list-inside text-sm sm:text-lg text-gray-300">
                <li><strong><em>Bsc in Computer Science (2020)</em></strong></li>
                <li>Mumbai University (2021 - 2024)</li>
              </ul>
            </div>
          </div>

          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl sm:text-2xl text-center font-bold mb-8">💻 Work Experience</h3>
            <ul className="pl-5 list-disc list-inside text-sm sm:text-lg text-gray-300">
              <li>
                <strong className="text-blue-400"><em>FullStack Developer (Freelance / Contract)</em></strong> 📍
                <br />* August 2025 - Present <br />
                - Built responsive and accessible websites using Java Servlet <br />
                - Developed dynamic user interfaces with JavaScript (ES6+), HTML, and CSS. <br />
                - Integrated RESTful APIs and optimized performance for faster load times.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-center mt-6">
          <a
            className="bg-white text-pink-950 py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center text-sm sm:text-base font-medium transition relative overflow-hidden
              hover:translate-y-1 hover:shadow-[0_0_15px_rgba(180,0,246,0.5)]"
            href={certificates}
            download
          >
            <span>View My Certificate</span>
            <MdOutlineFileDownload className="ml-2 text-lg sm:text-2xl" />
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
