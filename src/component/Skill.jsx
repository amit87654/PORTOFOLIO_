

import React, { useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three-stdlib";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Skill = () => {
  const canvasRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(6, 4, 10);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    // LIGHTING
    scene.add(new THREE.AmbientLight(0x000000, 0.9));

    const directionalLight = new THREE.DirectionalLight(0x111111, 500);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // TEXTURE LOADER
    const loader = new THREE.TextureLoader();
    const imagePaths = [
      "/src/assets/three.jpg",
      "/src/assets/img2.jpg",
      "/src/assets/",
      "/src/assets/javascript.webp",
      "src/assets/tailwind.png",
      "/src/assets/img6.jpg",
      "/src/assets/three.webp",
    ];


    const geometry = new RoundedBoxGeometry(3, 3, 3, 5, 6); 
const material = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.2, roughness: 0.5 ,});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
    // CARD GEOMETRY
    const radius = 5;
    const cardGeometry = new THREE.BoxGeometry(3, 3, 0.1);

    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const texture = loader.load(imagePaths[i]);
      texture.minFilter = THREE.LinearFilter;

      const cardMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.3,
        roughness: 0.5,
        
        


      });

      const card = new THREE.Mesh(cardGeometry, cardMaterial);
      card.position.set(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      );
      card.lookAt(0, 0, 0);
      scene.add(card);
    }

    // ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2;

    // ANIMATION LOOP
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // RESPONSIVENESS
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
<section
  id="skill"
  ref={containerRef}
  className="skill relative w-full h-screen bg-black overflow-hidden bg-[url('src/assets/bg.png')] bg-cover bg-center"
>
  <canvas ref={canvasRef} className="w-full h-full" />
<div className="absolute top-5 left-5 z-10 text-center">
  <h1
    className=" text-center text-3xl md:text-5xl lg:text-6xl text-[#00ffff] font-bold animate-pulse neon-glow titan"
    style={{
      color: "transparent",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      letterSpacing: '50px',
      backgroundImage:
        "linear-gradient(to top, black, black, white)",
      fontFamily: "Poppins, sans-serif",
    }}
  >
    <TypeAnimation
      sequence={[
        'SKILLS', // text to type
        2000,     // wait time
        '',       // delete everything
        500,
        'HTML, CSS, JS...',
        1500,
        'React, Tailwind, Three.js',
        1500,
        'swiper.js🚀',
        2000,
        "",
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-2xl md:text-4xl lg:text-5xl font-bold neon-glow titan"
      style={{
        fontSize: '2rem',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        letterSpacing: '50px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        textAlign: 'center',
        backgroundImage:
          'linear-gradient(to top, black, black, white, black, white, white, white, white)',
        fontFamily: 'Poppins, sans-serif',
      }}
    />
  </h1>
</div>


  
</section>

  );
};

export default Skill;
