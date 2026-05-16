import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Glow Circle */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 
        w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[160px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Light Lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-full bg-blue-500/20 blur-sm animate-pulse"
          style={{
            left: `${i * 18}%`,
            animationDelay: `${i}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
