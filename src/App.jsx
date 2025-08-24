import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import "./index.css";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Skill from "./component/Skill";
import './main.jsx'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(false);
      setShowMainContent(true);
    }, 3000);

    return () => clearTimeout(timer1);
  }, []);

  return (
  <div className="scroll-smooth transition-all duration-4000 ease-out fade-in">
  {loading ? (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <h1
        className="font-bold animate-pulse neon-glow titan flex items-center"
        style={{
          color: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundImage:
            "linear-gradient(to top,black,black,white,black,white,white,white,white)",
          fontFamily: "poppins",
        }}
      >
        {/* FRON */}
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-10xl">
          FRON
        </span>

        {/* T */}
        <span className="text-[100px] sm:text-[200px] md:text-[300px] lg:text-[400px]">
          T
        </span>

        {/* END */}
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
          END
        </span>
      </h1>
    </div>
  

  

      ) : (
        <div
          className={`transition-all duration-1000 ease-out transform ${
            showMainContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Navbar />
          <Home />


          <div className="fade-in bg-black text-white">
          <About />
          </div>
          <Projects />
          <Skill/>
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;
