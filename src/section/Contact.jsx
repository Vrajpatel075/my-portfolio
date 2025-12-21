// import RevelOnScroll from "../UI/RevelOnScroll";

import RevealOnScroll from "../UI/RevealOnScroll"

export const Contact =()=>{
    return(
    <section id="contact" className="min-h-screen font-mono flex items-center justify-center py-4 w-full px-10 ">
        <RevealOnScroll>

        <div className="w-100 md:w-3xl px-4" id="contacts">
        
        <h2 
        className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center "
        >Get  in Touch
        </h2>

        <form className="space-y-6"  action="https://formsubmit.co/vraj75228@gmail.com" method="POST">
            <div className="relative36">
                <input 
                type="text"
                id="name"
                name="name"
                placeholder="Enter Full Name"
                required 
                className="w-full bg-white/10 border border-r-white rounded p-4 py-3 text-white 
                transition focus:outline-none focus:border-indigo-600 focus:bg-blue-400/5"
                />
            </div>
            <div className="relative">
                <input 
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required 
                className="w-full bg-white/10 border border-r-white rounded p-4 py-3 text-white 
                transition focus:outline-none focus:border-indigo-600 focus:bg-blue-400-5"
                />
            </div>
            <div className="relative">
                <textarea 
                type="message"
                id="message"
                name="message"
                rows={6}
                placeholder="type your message"
                required 
                className="w-full bg-white/10 border border-r-white rounded p-4 py-3 text-white 
                transition focus:outline-none focus:border-indigo-600 focus:bg-blue-400/5"
                />
            </div>

            <button 
            type="submit"
            className="w-full bg-gradient-to-r flex justify-center cursor-pointer from-violet-600 to-purple-800
            px-6 py-2 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(180,0,246,0.5)] "
            > Submit

            </button>
        </form>
        </div> 
        </RevealOnScroll>     
    </section>
    );
};