import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "GlobalFpo",
    year: "Jul 2024 - Present",
    location: "Noida",
    description:
      "Developing scalable business applications with reusable components, dashboard modules, API integrations, and dynamic routing using React.js and Next.js.",
    tech: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Vercel",
      "Git",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Jspider",
    year: "Jul 2023 - Jul 2024",
    location: "Noida",
    description:
      "Built responsive web applications, worked on authentication flows, API handling, debugging, deployment basics, and frontend optimization.",
    tech: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive UI",
      "GitHub",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Work Experience
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey building modern web applications,
            scalable frontend systems, and responsive user experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 space-y-12">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div className="absolute left-[-10px] top-3 w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 hover:border-blue-500/30 transition duration-300">
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>

                    <p className="text-blue-400 font-medium">
                      {exp.company} • {exp.location}
                    </p>
                  </div>

                  <span className="text-sm px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 w-fit">
                    {exp.year}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-blue-500/10 hover:text-white transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;