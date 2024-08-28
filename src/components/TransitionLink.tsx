"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import { Button } from "./ui/button";
import { Ref } from "react";

export default function TransitionLink({
  href,
  label,
  ref,
}: {
  href: string;
  label: string;
  ref?: Ref<HTMLButtonElement>;
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <Button
      ref={ref}
      variant="link"
      className="font-medium text-[20px] text-foreground no-underline p-1"
      onClick={handleClick}
    >
      {label}
    </Button>
  );
}
