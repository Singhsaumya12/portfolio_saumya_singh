import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Web",
    desc: "Responsive eCommerce application with product pages, routing, reusable UI components, and API integration.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Singhsaumya12/ecommerce-web",
    demo: "https://ecommerce-web-umber.vercel.app",
    img: "/projects/ecommerce-web.png",
  },

  {
    title: "E-Commerce Platform",
    desc: "Modern shopping platform with filtering, ordering flow, authentication, and responsive layouts.",
    tech: ["React.js", "REST APIs", "CSS"],
    github: "https://github.com/Singhsaumya12/e-commerce",
    demo: "https://e-commerce-three-sable-ne9os1klyl.vercel.app",
    img: "/projects/e-commerce.png",
  },

  {
    title: "Age Calculator",
    desc: "Interactive age calculator app with responsive UI and dynamic date calculations.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Singhsaumya12/Age_Calculator",
    demo: "https://age-calculator-plum-six-81.vercel.app",
    img: "/projects/age-calculator.png",
  },

  {
    title: "Digital Marketing Website",
    desc: "Responsive marketing agency website with modern sections and reusable UI design.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Singhsaumya12/Digital_Marketing",
    demo: "https://digital-marketing-lime-five.vercel.app",
    img: "/projects/digital-marketing.png",
  },

  {
    title: "Workshop Frontend",
    desc: "Frontend workshop project focused on layouts, responsive sections, and UI development.",
    tech: ["React.js", "CSS", "JavaScript"],
    github: "https://github.com/Singhsaumya12/Workshop__Frontend",
    demo: "https://workshop-frontend-five.vercel.app",
    img: "/projects/workshop.png",
  },

  {
    title: "Parallax Website",
    desc: "Creative parallax scrolling website with smooth animations and immersive sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Singhsaumya12/Parallax_Website",
    demo: "https://parallax-website-green-nu.vercel.app",
    img: "/projects/parallax.png",
  },

  {
    title: "Redux Project",
    desc: "Redux-based application demonstrating global state management and reusable architecture.",
    tech: ["Redux", "React.js", "JavaScript"],
    github: "https://github.com/Singhsaumya12/Redux",
    demo: "https://redux-one-eta.vercel.app",
    img: "/projects/redux.png",
  },

  {
    title: "RTK Query Project",
    desc: "Redux Toolkit Query implementation with API fetching, caching, and optimized state management.",
    tech: ["Redux Toolkit", "RTK Query", "React.js"],
    github: "https://github.com/Singhsaumya12/Rtk_Qurey",
    demo: "https://rtk-query.vercel.app",
    img: "/projects/rtk-query.png",
  },
];

const Projects = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            My Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Projects focused on modern frontend development,
            scalable UI systems, responsive layouts, and real-world applications.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (

            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-blue-500/30 transition duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {p.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-5">

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                  >
                    <Github size={18} />
                    Code
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>
            </motion.div>

          ))}

        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <a
            href="https://vercel.com/singhsaumya12s-projects"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg shadow-blue-500/30"
          >
            View All Projects
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;