import { capitalizeFirstLetter } from "@/helper/capitalize";
import { useTheme } from "next-themes";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { SwatchBook } from "lucide-react";

export default function ThemeChanger() {
  const { themes, setTheme, theme } = useTheme();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <SwatchBook />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[1000]">
          <ScrollArea className="h-[50vh]">
            {themes.map((actual) => {
              function capitalizeTheme(theme: string): string {
                // Separar o nome e sobrenome e capitalizar
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
                  className={
                    actual === theme
                      ? "border-r-[4px] border-primary mr-1"
                      : "mr-1"
                  }
                >
                  {capitalizeTheme(actual)}
                </DropdownMenuItem>
              );
            })}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
