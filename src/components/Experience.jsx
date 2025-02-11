"use client";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import Computer from "./Computers";

export default function Experience() {
  return (
    <>
      <group rotation-y={0}>
        <group position-y={-1} position-z={-0.5}>
          <Avatar />
        </group>
      </group>
      <ambientLight intensity={1.5} />
    </>
  );
}
