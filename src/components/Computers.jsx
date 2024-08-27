import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

export default function Computer({ isMobile }) {
  const computer = useGLTF("models/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.1 : 0.13}
        position={isMobile ? [0, -3, -2.2] : [-0.2, -0.3, 0.9]}
        rotation={[0, 89.6, 0]}
      />
    </mesh>
  );
};
