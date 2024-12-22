import Image from "next/image";

import { scrollToSection } from "@/utils/scrollToSection";
import HeaderElements from "../common/Header/HeaderElements";
import HamburguerMenu from "../common/Header/HamburguerMenu";

export default function Header() {
  return (
    <header className="w-full h-[70px] flex items-center justify-between">
      <div className="w-auto h-[45px] flex justify-center items-center">
        <Image
          src="/logos/logo_m_aventura_new.webp"
          alt="Logo header Mansión Aventura"
          width={93}
          height={45}
          className="w-auto h-full object-cover"
        />
      </div>
      <HamburguerMenu />
      <div className="hidden md:block">
        <HeaderElements scrollToSection={scrollToSection} />
      </div>
    </header>
  );
}
