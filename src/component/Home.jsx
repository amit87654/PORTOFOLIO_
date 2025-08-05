
import React from 'react';

const Home = () => {
  return (
    <div className="h-screen w-full bg-black relative overflow-hidden flex cursor-none">

      {/* ✅ LEFT SIDE TEXT WITH BACKDROP */}
      <div className="w-[20%] h-full z-10 flex items-center justify-center p-4 
                      bg-black/30 backdrop-blur-md absolute top-0 left-0">
        <h1
          className="text-white text-[4vw] pointer-events-none select-none"
          style={{
            fontFamily: 'Poppins, sans-serif',
            writingMode: 'vertical-rl',
            letterSpacing: '6px',
            lineHeight: 1.2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '3.4rem',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right,black, black, white, black, white, white, white, white)',
            textAlign: 'center',
          }}
        >
          FRONTEND
        </h1>
      </div>

      {/* ✅ FULLSCREEN MODEL */}
      <div className="w-full h-full relative " style={{cursor:'none'}}>
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-weoJxliktlUxHrfFnuxmZsqf/"
          frameBorder="0"
          className="w-full h-full cursor-none"
          allow="fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;

