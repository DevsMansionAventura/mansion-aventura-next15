"use client";
// Types
import type { LogoProps } from "@/types/components";

export default function HambIcon({ className, onClick }: LogoProps) {
  return (
    <svg
      width="30"
      height="20.4"
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M24.1667 1.20831H0.833374M24.1667 8.49998H0.833374M24.1667 15.7916H0.833374"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
