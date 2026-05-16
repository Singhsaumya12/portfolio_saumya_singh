import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const StarBackground = () => {
  return (
    <div className="fixed inset-0 -z-20">

      <Canvas camera={{ position: [0, 0, 1] }}>

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          fade
          speed={2}
        />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.3}
        />

      </Canvas>

    </div>
  );
};

export default StarBackground;
