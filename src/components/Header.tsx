"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGlitch } from "react-powerglitch";
import { Button } from "./ui/button";
import { animatePageOut } from "@/animations";
import ThemeChanger from "./theme-changer";

export function Header() {
  const router = useRouter();

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
    <header className="z-[1000] w-full flex justify-center items-start">
      <motion.div
        className="navbar flex gap-5 p-4 ml-6 mt-6 saturate-100 rounded-lg h-6 justify-center items-center select-none mr-12"
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
        }}
      >
        {[
          {
            label: "INÍCIO",
            href: "/",
          },
          {
            label: "SOBRE",
            href: "/about",
          },
          {
            label: "PROJETOS",
            href: "projects",
          },
          {
            label: "CONTATO",
            href: "/contact",
          },
        ].map((item) => (
          <Button
            key={item.label}
            ref={navGlith.ref}
            variant="link"
            className="font-medium text-[20px] text-foreground no-underline p-1"
            onClick={() => animatePageOut(item.href, router)}
          >
            {item.label}
          </Button>
        ))}
      </motion.div>
      <ThemeChanger />
    </header>
  );
}
