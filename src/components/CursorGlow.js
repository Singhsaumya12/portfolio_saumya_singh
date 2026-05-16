import React, { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-64 h-64 pointer-events-none rounded-full
      bg-blue-500/20 blur-3xl -translate-x-1/2 -translate-y-1/2 z-50"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    />
  );
};

export default CursorGlow;
