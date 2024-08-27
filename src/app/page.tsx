"use client";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Experience from "@/components/Experience";
import { motion } from "framer-motion";
import { useGlitch } from "react-powerglitch";

export default function Home() {
  const navGlith = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 10000,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 10,
      amplitudeX: 0.1,
      amplitudeY: 0.1,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <div className="flex flex-col w-full justify-start ">
      <header className="fixed t-0 z-[1000] w-full flex justify-center items-start">
        <motion.div
          className="navbar flex p-2 ml-6 mt-6 backdrop-blur-[6px] saturate-100 rounded-lg h-6 justify-center items-center select-none mr-12"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <ol
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo(-100, 0);
            }}
          >
            <a
              className="font-medium text-[20px] text-[#fefaee] no-underline p-1"
              ref={navGlith.ref}
            >
              INÍCIO
            </a>
          </ol>
          <ol
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo(-100, 670);
            }}
          >
            <a
              className="font-medium text-[20px] text-[#fefaee] no-underline p-1"
              ref={navGlith.ref}
            >
              SOBRE
            </a>
          </ol>
          <ol
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo(-100, 1350);
            }}
          >
            <a
              className="font-medium text-[20px] text-[#fefaee] no-underline p-1"
              ref={navGlith.ref}
            >
              PROJETOS
            </a>
          </ol>
          <ol
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo(-100, 1950);
            }}
          >
            <a
              className="font-medium text-[20px] text-[#fefaee] no-underline p-1"
              ref={navGlith.ref}
            >
              ESTUDOS
            </a>
          </ol>
          <ol
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo(-100, 2500);
            }}
          >
            <a
              className="font-medium text-[20px] text-[#fefaee] no-underline p-1"
              ref={navGlith.ref}
            >
              CONTATO
            </a>
          </ol>
        </motion.div>
      </header>
      <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 12 }}>
        <Experience />
      </Canvas>
    </div>
  );
}
