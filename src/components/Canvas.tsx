import React, { Suspense } from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import Experience from "./Experience";
import CanvasLoader from "./Loader";

export default function Canvas() {
  return (
    <ThreeCanvas
      className="z-[100] h-[2000px] [mask-image:_linear-gradient(to_top,transparent_0,_black_20px,_black_calc(100%-50px),transparent_100%)]"
      shadows
      camera={{
        fov: 25,
        rotation: [0, 0, 0],
        near: 0.1,
        isObject3D: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Experience />
      </Suspense>
    </ThreeCanvas>
  );
}
