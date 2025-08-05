import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
<nav className=" w-full z-[999] bg-black backdrop-blur-md text-white p-6">

      <div className="fade-in max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className=" logo text-xl font-bold" style={{fontFamily:'poppins'}}>Amit Dev</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links (desktop) */}
        <ul className="hidden md:flex gap-6 fade-in text-lg">
          <li><a href="#home" className="hover:text-blue-400" style={{fontFamily:'poppins'}}>Home</a></li>
          <li><a href="#about" className="hover:text-blue-400" style={{fontFamily:"poppins"}}>About</a></li>
          <li><a href="#projects" className="hover:text-blue-400" style={{fontFamily:'poppins'}}>Projects</a></li>
          <li><a href="#skill" className="hover:text-blue-400" style={{fontFamily:"poppins"}}>Skill</a></li>
         <li><a href="#contact" className="hover:text-blue-400" style={{fontFamily:"poppins"}}>Contact</a></li>


        </ul>
      </div>

      {/* Nav Links (mobile dropdown) */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-black text-white fae-in">
          <li><a href="#home" className="block hover:text-blue-400"   style={{fontFamily:'poppins'}}>Home</a></li>
          <li><a href="#about" className="block hover:text-blue-400"  style={{fontFamily:'poppins'}}>About</a></li>
          <li><a href="#projects" className="block hover:text-blue-400"style={{fontFamily:'poppins'}}>Projects</a></li>
           <li><a href="#skill" className="hover:text-blue-400" style={{fontFamily:"poppins"}}>Skill</a></li>

          <li><a href="#contact" className="block hover:text-blue-400" style={{fontFamily:'poppins'}}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
