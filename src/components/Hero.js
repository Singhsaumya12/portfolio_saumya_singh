import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e40af33,transparent_40%)]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="glass glow max-w-4xl p-10 rounded-2xl text-center z-10"
      >

        {/* Title */}
        <motion.h1
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-400">Saumya Singh</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-300 mb-6"
        >
          Frontend Developer | React.js | Next.js 
        </motion.p>

        {/* Tech Stack */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {["React", "Next", "JS", "Tailwind", "Api Integration"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm bg-blue-500/10 border border-blue-400/30 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mb-6">

          <button
            onClick={() => navigate("/projects")}
            className="px-7 py-3 rounded-lg border border-blue-400 hover:bg-blue-500 transition"
          >
            View Projects
          </button>

          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white"
          >
            Download CV
          </a>

        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 text-2xl text-gray-400">

          <a href="https://github.com/Singhsaumya12" className="hover:text-white">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/saumya-singh-5a74b2217" className="hover:text-white">
            <FaLinkedin />
          </a>


        </div>

      </motion.div>

    </section>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>

  );
};

export default Hero;
