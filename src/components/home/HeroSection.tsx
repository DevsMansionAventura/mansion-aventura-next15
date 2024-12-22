"use client";
// Components
import SectionWrapper from "../common/StructElements/SectionWrapper";
import HeroLogo from "../common/Hero/HeroLogo";
import Birthday from "../common/Hero/Birthday";
import WrapperGrid from "../common/StructElements/WrapperGrid";

export default function HeroSection() {
  return (
    <SectionWrapper withoutMT>
      <WrapperGrid>
        <HeroLogo />
        <Birthday />
      </WrapperGrid>
    </SectionWrapper>
  );
}
