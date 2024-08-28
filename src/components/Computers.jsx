'use client'
import React from "react";
import {  useGLTF } from "@react-three/drei";

export default function Computer({ isMobile }) {
  const computer = useGLTF("models/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={0.13}
        position={[-0.2, -0.3, 0.9]}
        rotation={[0, 89.6, 0]}
      />
    </mesh>
  );
};
