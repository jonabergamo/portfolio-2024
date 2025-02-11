"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { TechOrbit } from "@/components/TechOrbit";

const DynamicCanvas = dynamic(() => import("@/components/Canvas"), {
  ssr: false, // Desativar renderização no servidor
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Define que o componente está montado, permitindo a renderização do Canvas
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Retorna null enquanto o componente não está montado
  }

  return (
    <div className="fixed top-0 w-screen h-screen flex flex-col justify-start">
      <DynamicCanvas />
      <div className="absolute aspect-square top-1/2 left-1/2 min-w-[200px] shadow-2xl shadow-primary overflow-hidden w-[35vw] bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <TechOrbit
        className="absolute aspect-square top-1/2 left-1/2"
        radiusMultiply={2}
      />
      <div className="w-full absolute top-[200px] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li className="text-[15vw] text-foreground font-bold break-keep whitespace-nowrap">
            Full Stack Developer
          </li>
          <li className="text-[15vw] text-foreground font-bold break-keep whitespace-nowrap">
            Full Stack Developer
          </li>
          <li className="text-[15vw] text-foreground font-bold break-keep whitespace-nowrap">
            Full Stack Developer
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li className="text-[15vw] text-foreground font-bold break-keep whitespace-nowrap">
            Full Stack Developer
          </li>
          <li className="text-[15vw] text-foreground font-bold break-keep whitespace-nowrap">
            Full Stack Developer
          </li>
          <li className="text-[15vw] text-foreground font-bold break-keep whitespace-nowrap">
            Full Stack Developer
          </li>
        </ul>
      </div>
    </div>
  );
}
