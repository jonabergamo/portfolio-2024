import { capitalizeFirstLetter } from "@/helper/capitalize";
import { useTheme } from "next-themes";
import React, { type ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

export default function ThemeChanger({ children }: { children: ReactNode }) {
  const { themes, setTheme, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="z-[1000]">
        <ScrollArea className="h-[50vh] pr-2">
          {themes.map((actual) => {
            function capitalizeTheme(theme: string): string {
              const parts = theme.split("-");
              const capitalizedParts = parts.map((part) =>
                capitalizeFirstLetter(part)
              );
              return capitalizedParts.join(" ");
            }
            return (
              <DropdownMenuItem
                onClick={() => {
                  setTheme(actual);
                }}
                key={actual}
                className={cn(
                  "m-1",
                  actual === theme ? "shadow shadow-primary" : "mr-1"
                )}
              >
                {capitalizeTheme(actual)}
              </DropdownMenuItem>
            );
          })}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
