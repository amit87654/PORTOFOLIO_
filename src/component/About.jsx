import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Skill = () => {
  const canvasRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

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

    scene.add(new THREE.AmbientLight(0x000000, 1.5));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const loader = new THREE.TextureLoader();

    // Textures
    const textureLeft = loader.load("/assets/profile.png", (tex) => {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, 1);
    });

    const textureRight = loader.load("/assets/text.png", (tex) => {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, 1);
    });

    // Cards
    const cardGeometryLeft = new THREE.BoxGeometry(4, 5, 0.2);
    const cardMaterialLeft = new THREE.MeshStandardMaterial({
      map: textureLeft,
      metalness: 0.3,
      roughness: 0.5,
    });
    const cardLeft = new THREE.Mesh(cardGeometryLeft, cardMaterialLeft);
    cardLeft.position.set(-2.5, 0, 0);
    scene.add(cardLeft);

    const cardGeometryRight = new THREE.BoxGeometry(3, 2, 0.2);
    const cardMaterialRight = new THREE.MeshStandardMaterial({
      map: textureRight,
      metalness: 0.3,
      roughness: 0.5,
    });
    const cardRight = new THREE.Mesh(cardGeometryRight, cardMaterialRight);
    cardRight.position.set(2.5, 0, 0);
    scene.add(cardRight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.enablePan = false;

    let animationId;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      // Dispose geometry and materials
      cardGeometryLeft.dispose();
      cardMaterialLeft.dispose();
      cardGeometryRight.dispose();
      cardMaterialRight.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
    <section id="about"
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden "
      style={{
        backgroundImage:"url(src/assets/bg.webp)"
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </section>
    </>
  );
};

export default Skill;
