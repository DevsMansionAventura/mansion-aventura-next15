"use client";
// Types
import type { LogoProps } from "@/types/components";

export default function CrossIcon({ className, onClick }: LogoProps) {
  return (
    <svg
      width="30"
      height="20.4"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M15.6094 0.890625L1.39062 15.1094M1.39062 0.890625L15.6094 15.1094"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
