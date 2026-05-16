import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full stack shopping app with payment gateway.",
    tech: ["React", "Node", "Stripe"],
    github: "#",
    demo: "#",
    img: "/projects/p1.png",
  },
  {
    title: "Task Manager",
    desc: "Real-time team collaboration app.",
    tech: ["Next.js", "MongoDB"],
    github: "#",
    demo: "#",
    img: "/projects/p2.png",
  },
  {
    title: "Weather App",
    desc: "Live forecast with charts.",
    tech: ["React", "API"],
    github: "#",
    demo: "#",
    img: "/projects/p3.png",
  },
];

const Projects = () => {
  return (
    <section className="py-20">

      <h2 className="text-4xl font-bold text-center mb-14">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((p, i) => (

          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-xl overflow-hidden group"
          >

            {/* Image */}
            <div className="overflow-hidden">

              <img
                src={p.img}
                alt={p.title}
                className="h-48 w-full object-cover 
                group-hover:scale-110 transition duration-500"
              />

            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-3">
                {p.desc}
              </p>

              {/* Tech */}
              <div className="flex gap-2 flex-wrap mb-4">

                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs bg-blue-500/10 rounded"
                  >
                    {t}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-blue-400"
                >
                  <Github size={16} /> Code
                </a>

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-blue-400"
                >
                  <ExternalLink size={16} /> Live
                </a>

              </div>

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
