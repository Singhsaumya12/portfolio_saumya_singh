import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 ">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ">

        {/* Image */}
        <motion.img
          src="/profile.jpg"
          alt="profile"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-2xl glow"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm a Full Stack Developer who builds scalable,
            secure and performance-driven web applications.
          </p>

          <p className="text-gray-300 mb-6">
            I specialize in modern JavaScript, cloud systems,
            and microservice architecture.
          </p>

          <div className="grid grid-cols-2 gap-4">

            <div className="glass p-4 rounded-lg">
              🎓 B.Tech CS
            </div>

            <div className="glass p-4 rounded-lg">
              🌍 Remote Ready
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
