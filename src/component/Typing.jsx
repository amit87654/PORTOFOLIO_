import { TypeAnimation } from 'react-type-animation';

<div className="absolute top-5 left-5 z-10">
  <TypeAnimation
    sequence={[
      'SKILLS', // text to type
      1000,     // wait time
      '',       // delete everything
      500,
      'HTML, CSS, JS...',
      1500,
      'React, Tailwind, Three.js',
      1500,
      'Frontend Dev Amit 🚀',
      2000
    ]}
    wrapper="h1"
    speed={50}
    repeat={Infinity}
    className="text-2xl md:text-4xl lg:text-5xl text-[#00ffff] font-bold neon-glow titan"
    style={{
      color: 'transparent',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      backgroundImage:
        'linear-gradient(to top, black, black, white, black, white, white, white, white)',
      fontFamily: 'Poppins, sans-serif',
    }}
  />
</div>
