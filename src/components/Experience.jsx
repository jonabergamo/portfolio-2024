'use client'
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import Computer from './Computers';

export default function Experience() {



  return (
    <>
      <OrbitControls />
      <group rotation-y={285.8}>
        <group position-y={-1}>
          <Avatar />
        </group>
        <group >
          <Computer />
        </group>
      </group>
      <ambientLight intensity={1.5} />
    </>
  );
}
