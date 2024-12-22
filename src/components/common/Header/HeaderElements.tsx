"use client";
// Types
import { SectionType, HeaderSectionsProps } from "@/types/components";
// Models
import { HeaderElementsStruct } from "@/models/HeaderElementsStruct";

export default function HeaderElements({
  scrollToSection,
}: HeaderSectionsProps) {
  return (
    <nav className="w-full h-auto mb-[4vh] md:mb-0">
      <div className="grid grid-cols-1 gap-[2vh] justify-items-center md:grid-cols-auto-fit-4 md:gap-[40px]">
        {HeaderElementsStruct.map((section: SectionType) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="w-max text-white text-paragraphMobile font-normal hover:underline"
          >
            {section.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
