"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  HomeIcon,
  MailIcon,
  FolderIcon,
  UserIcon,
  SwatchBook,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";
import { animatePageOut } from "@/animations";
import ThemeChanger from "./theme-changer";

export function Header() {
  const router = useRouter();

  const NAV_ITEMS = [
    { href: "/", icon: HomeIcon, label: "Início" },
    { href: "/about", icon: UserIcon, label: "Sobre" },
    { href: "/projects", icon: FolderIcon, label: "Projetos" },
    { href: "/contact", icon: MailIcon, label: "Contato" },
  ];

  return (
    <header className="z-[1000] w-full flex justify-end items-start">
      <h1 className="absolute top-5 left-5 text-3xl font-bold text-foreground">
        Jonathan Bergamo
      </h1>
      <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
        <TooltipProvider>
          <Dock direction="middle" className="shadow shadow-primary">
            {NAV_ITEMS.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-xl aspect-square hover:bg-transparent hover:shadow hover:shadow-primary transition-all duration-500"
                      )}
                      onClick={() => animatePageOut(item.href, router)}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full py-2" />
            <DockIcon>
              <Tooltip delayDuration={0}>
                <ThemeChanger>
                  <TooltipTrigger asChild>
                    <button
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-xl aspect-square hover:bg-transparent hover:shadow hover:shadow-primary transition-all duration-300"
                      )}
                    >
                      <SwatchBook />
                    </button>
                  </TooltipTrigger>
                </ThemeChanger>
                <TooltipContent>
                  <p>Tema</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </header>
  );
}
