import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { TypeAnimation } from "react-type-animation";

const projects = [
  {
    title: "TODOLIST",
    description: "Organize your daily tasks with ease.",
    link: "",
  },
  {
    title: "WEATHER APP",
    description: "Get real-time weather updates anywhere.",
    link: "https://weather-app-jzv7.vercel.app/",
  },
  {
    title: "TASK MANAGEMENT",
    description: "Manage projects efficiently with your team.",
    link: "#",
  },
  {
    title: "QUIZ APP",
    description: "Test your knowledge with interactive quizzes.",
    link: "#",
  },
  {
    title: "PORTFOLIO",
    description: "Showcasing my skills and projects.",
    link: "#",
  },
];

const Project = () => {
  return (
    <div className="fade-in w-full h-screen bg-black flex flex-col items-center justify-center relative  "
    style={{
      backgroundImage:'url(dist/public/textures/light.png)'
    }}>
      {/* HEADER TEXT AT TOP */}
      <div className="absolute top-10 z-20 text-center px-4">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl text-[#00ffff] font-bold animate-pulse"
          style={{
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            letterSpacing: "10px",
            backgroundImage: "linear-gradient(to top, #00ffff, white)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <TypeAnimation
            sequence={[
              "PROJECT",
              5000,
              "",
              500,
              "TODOLIST...",
              1500,
              "WEATHER APP",
              1500,
              "TASK MANAGEMENT🚀",
              1500,
              "QUIZ APP",
              1500,
              "PORTFOLIO",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              fontVariant: "small-caps",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              letterSpacing: "10px",
              fontFamily: "Poppins",
              fontSize: "2rem",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              backgroundImage: "linear-gradient(to top, black, white)",
            }}
          />
        </h1>
      </div>

      {/* SWIPER SLIDER */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-[100%] h-[550px] mt-24"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <section id="projects" className="project-bg fade-in rounded-2xl p-10 text-white text-center text-xl font-semibold shadow-2xl hover:scale-105 transition-transform duration-500 h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-800 to-slate-900">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-color  rounded-full text-white text-sm transition-all duration-300"
              >
                View Project
              </a>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;
