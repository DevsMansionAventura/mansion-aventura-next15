"use client";
// Next - React
import React, { useState } from "react";
import Image from "next/image";
// Assets
import HambIcon from "../StructElements/HambIcon";
import CrossIcon from "../StructElements/CrossIcon";
// Components
import HeaderElements from "./HeaderElements";
import Contact from "../StructElements/Contact";
// Uitls
import { scrollToSection } from "@/utils/scrollToSection";

export default function HamburguerMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScrollToSection = (id: string) => {
    scrollToSection(id, 30, () => setIsSidebarOpen(false));
  };

  return (
    <div className="md:hidden">
      <HambIcon className="mx-[10px]" onClick={toggleSidebar} />
      <div
        className={`w-full h-screen fixed top-0 right-0 bg-purpleDark text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full h-[100dvh] relative flex flex-col justify-center items-center">
          <CrossIcon
            className="absolute top-[30px] right-[30px]"
            onClick={toggleSidebar}
          />
          <div className="w-[170px] h-auto flex mb-[40px]">
            <Image
              src="/logos/logo_mansion_castle.webp"
              alt="Mansion Logo Sidebar"
              width={1197}
              height={1560}
              className="w-full h-auto object-cover"
            />
          </div>
          <HeaderElements scrollToSection={handleScrollToSection} />
          <Contact />
        </div>
      </div>
    </div>
  );
}
