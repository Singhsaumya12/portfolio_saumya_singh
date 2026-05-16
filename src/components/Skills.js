import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "AWS", level: 70 },
    { name: "PostgreSQL", level: 75 },
  ];

  const categories = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
    Backend: ["Node.js", "Python", "Express", "FastAPI"],
    Database: ["PostgreSQL", "MongoDB", "Redis"],
    DevOps: ["Docker", "AWS", "CI/CD", "Git"],
  };

  return (
    <section className="py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto px-6">

        {/* Progress Bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {skills.map((skill, i) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-5 rounded-xl"
            >

              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-blue-500 h-2 rounded-full"
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
              className="glass p-6 rounded-xl"
            >

              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {cat}
              </h3>

              <ul className="space-y-2 text-gray-300">

                {items.map((item) => (
                  <li key={item}>⚡ {item}</li>
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
