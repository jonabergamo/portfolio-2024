import React from "react";
import TechIcons from "./TechIcons";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";

export function TechOrbit({
  className,
  radiusMultiply = 1,
}: {
  className: string;
  radiusMultiply?: number;
}) {
  return (
    <div className={cn("", className)}>
      <OrbitingCircles iconSize={40} path>
        <TechIcons name="typescript" />
        <TechIcons name="python" />
        <TechIcons name="java" />
        <TechIcons name="cypress" />
        <TechIcons name="reactjs" />
      </OrbitingCircles>
      <OrbitingCircles iconSize={35} radius={120} reverse speed={1.5} path>
        <TechIcons name="nestjs" />
        <TechIcons name="nextjs" />
        <TechIcons name="django" />
        <TechIcons name="spring" />
        <TechIcons name="graphql" />
        <TechIcons name="swagger" />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={160} speed={2} path>
        <TechIcons name="postgresql" />
        <TechIcons name="mongodb" />
        <TechIcons name="prisma" />
        <TechIcons name="reactquery" />
        <TechIcons name="tailwindcss" />
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={200} reverse speed={2.5} path>
        <TechIcons name="docker" />
        <TechIcons name="git" />
        <TechIcons name="figma" />
        <TechIcons name="electron" />
        <TechIcons name="grafana" />
        <TechIcons name="vitejs" />
        <TechIcons name="html5" />
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={240} speed={3} path>
        <TechIcons name="aws" />
        <TechIcons name="linux" />
      </OrbitingCircles>
    </div>
  );
}
