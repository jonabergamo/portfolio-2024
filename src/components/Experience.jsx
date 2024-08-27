'use client'
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import Computer from './Computers'

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar />
      </group>
      <group rotate={0}>
        <Computer />
      </group>
      <directionalLight intensity={1} />
      <ambientLight intensity={1.5} />
    </>
  );
};
