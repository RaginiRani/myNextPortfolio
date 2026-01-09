"use client";

import { cn } from "@/lib/utils";

export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#617a39]/20 blur-3xl",
        className
      )}
    />
  );
}
