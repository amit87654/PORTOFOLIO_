import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
 import { FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
 
import { Wireframe } from "three-stdlib";

const Contact = () => {
  const canvasRef = useRef();
  const animationRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.CircleGeometry(1.9, 178);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      roughness: 0.1,
      metalness: 0.8,
      side: THREE.DoubleSide,
      
      
    });

    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(3, 3, 5);
    scene.add(light);

    const animate = () => {
      circle.rotation.z += 0.003;
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("✅ Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className=" bg-no-repeat bg-cover bg-center relative w-full min-h-[100vh] bg-black overflow-hidden flex items-center justify-center px-4 sm:px-8"
    style={{
      backgroundImage:'url(public/assets/gradient.png)'
    }}
    
    >
      {/* Background Canvas */}
    
\      <canvas
        ref={canvasRef}
        className=" animate animate-bounce slow-animation  absolute top-0 left-0 w-full h-full z-0 sm:rounded-2xl shadow-2xl shadow-cyan-500/500"
      />
      {/* Enlarged Glassmorphic Form */}
      <div
        className="absolute z-10 w-[400] max-w-2xl bg-cyan/50 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl text-white"
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
          backgroundImage:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="p-4 text-lg rounded bg-color text-white placeholder-white/70 outline-none"
         
            
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="p-4 text-lg rounded bg-color text-white placeholder-white/70 outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            
            className="p-4 text-lg rounded bg-color text-white placeholder-white/70 outline-none"
          ></textarea>
          <button
            type="submit"
            className="opacity-300 border  border-spacing-1 transition rounded p-4 font-semibold shadow-lg text-white text-lg"
            
          >
            Send Message
          </button>
        </form>
        </div>

<div className="absolute bottom-10 z-10 flex gap-6 justify-center items-center w-full text-white text-2xl">
  <a href="https://wa.me/918092550576" target="_blank" rel="noreferrer">
    <FaWhatsapp className="hover:text-cyan-400" />
  </a>
  <a href="https://github.com/amit87654" target="_blank" rel="noreferrer">
    <FaGithub className="hover:text-cyan-400" />
  </a>
  <a href="https://www.instagram.com/amit_titan_07/" target="_blank" rel="noreferrer">
    <FaInstagram className="hover:text-cyan-400" />
  </a>
</div>

      </section>
    
  );
};

export default Contact;
