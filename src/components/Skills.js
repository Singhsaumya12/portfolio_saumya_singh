import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML & CSS", level: 95 },
    { name: "REST APIs", level: 82 },
  ];

  const categories = {
    Frontend: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],

    Concepts: [
      "Responsive Design",
      "Reusable Components",
      "API Integration",
      "Dynamic Routing",
      "State Management",
    ],

    Tools: [
      "Git",
      "GitHub",
      "Vercel",
      "REST APIs",
      "Deployment",
    ],

    Other: [
      "Debugging",
      "UI Development",
      "Frontend Optimization",
      "Problem Solving",
      "Performance Tuning",
    ],
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            My Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable,
            responsive, and modern web applications.
          </p>
        </motion.div>

        {/* Progress Bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">

          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl hover:border-blue-500/30 transition"
            >
              <div className="flex justify-between mb-3">
                <span className="text-white font-medium">
                  {skill.name}
                </span>

                <span className="text-blue-400 font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                />
              </div>
            </motion.div>
          ))}

        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {Object.entries(categories).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-7 rounded-3xl hover:border-blue-500/30 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {cat}
              </h3>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="text-blue-400">⚡</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;