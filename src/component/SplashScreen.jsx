import React from 'react';
import './Splash.css'; // optional custom CSS

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white animate-fade">
      <h1 className="text-6xl font-bold neon-text" style={{fontFamily:'poppins'}}></h1>
    </div>
  );
};

export default SplashScreen;
