import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      />

    </motion.div>
  );
};

export default Loader;
