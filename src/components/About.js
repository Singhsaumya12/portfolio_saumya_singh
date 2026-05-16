import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <img
            src="/profile.png"
            alt="profile"
            className="relative z-10 w-full h-full   rounded-full border border-white/10 shadow-2xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 font-semibold tracking-widest uppercase">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight text-white">
            Frontend Developer <br />
            Building Modern Web Experiences
          </h2>

          <p className="text-gray-300 leading-relaxed mb-5 text-lg">
            I'm a passionate Frontend Developer with hands-on experience in
            building scalable and responsive web applications using{" "}
            <span className="text-white font-semibold">
              React.js, Next.js, JavaScript, HTML, CSS,
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold">
              Tailwind CSS.
            </span>
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I enjoy creating reusable UI components, dynamic routing systems,
            dashboard modules, and API-integrated applications with smooth user
            experiences. I’ve worked on eCommerce platforms, technical modules,
            and responsive business websites while improving performance,
            debugging production issues, and deploying applications on Vercel.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-5">
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl hover:scale-105 transition">
              <h3 className="text-3xl mb-2">💻</h3>
              <p className="text-white font-semibold">Frontend Developer</p>
              <span className="text-gray-400 text-sm">
                React.js & Next.js
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl hover:scale-105 transition">
              <h3 className="text-3xl mb-2">🚀</h3>
              <p className="text-white font-semibold">1+ Years Experience</p>
              <span className="text-gray-400 text-sm">
                Real Industry Projects
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl hover:scale-105 transition">
              <h3 className="text-3xl mb-2">🎓</h3>
              <p className="text-white font-semibold">B.Tech CSE</p>
              <span className="text-gray-400 text-sm">
                80.7% Graduation Score
              </span>
            </div>

            {/* <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl hover:scale-105 transition">
              <h3 className="text-3xl mb-2">⚡</h3>
              <p className="text-white font-semibold">Problem Solver</p>
              <span className="text-gray-400 text-sm">
                HackerRank & GFG
              </span>
            </div> */}

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;