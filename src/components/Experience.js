import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Developer",
    company: "Tech Company",
    year: "2022 - Present",
    tech: ["React", "AWS", "Docker"]
  },
  {
    role: "Full Stack Dev",
    company: "Startup Inc",
    year: "2020 - 2022",
    tech: ["Next.js", "MongoDB"]
  },
  {
    role: "Frontend Dev",
    company: "Agency",
    year: "2019 - 2020",
    tech: ["HTML", "CSS", "JS"]
  },
];

const Experience = () => {
  return (
    <section className="py-20">

      <h2 className="text-4xl text-center font-bold mb-16">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">

        {experiences.map((exp, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-6 rounded-xl"
          >

            <div className="flex justify-between mb-3">
              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>
              <span className="text-gray-400">
                {exp.year}
              </span>
            </div>

            <p className="text-gray-400 mb-3">
              {exp.company}
            </p>

            <div className="flex gap-2 flex-wrap">

              {exp.tech.map(t => (
                <span
                  key={t}
                  className="px-2 py-1 bg-blue-500/10 rounded text-sm"
                >
                  {t}
                </span>
              ))}

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default Experience;
