import { GiCrossMark } from "react-icons/gi";

function MobileMenu({ IsMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col 
      items-center justify-center transition-all duration-300 gap-1.5 ease-in-out overflow-x-hidden max-w-full
      ${IsMenuOpen 
        ? "opacity-100 pointer-events-auto" 
        : "opacity-0 pointer-events-none"}`
      }
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-5 text-2xl focus:outline-none cursor-pointer text-white"
        aria-label="close menu"
      >
        <GiCrossMark />
      </button>

      {["Home", "About", "Projects", "Contacts"].map((item) => (
        <a
          key={item}
          onClick={() => setIsMenuOpen(false)}
          href={`#${item.toLowerCase()}`}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
            ${IsMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-5"}`
          }
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default MobileMenu;
