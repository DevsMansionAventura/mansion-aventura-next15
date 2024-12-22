// Types
import type { SectionProps } from "@/types/components";

export default function SectionWrapper({
  children,
  idSection,
  withoutMT,
  withoutMB,
}: SectionProps) {
  const baseClass = "w-full h-auto";
  const marginTopClass = withoutMT ? "mt-custom-y" : "mt-[100px] lg:mt-[150px]";
  const marginBottomClass = withoutMB
    ? "mb-custom-y"
    : "mb-[100px] lg:mb-[150px]";

  return (
    <section
      id={idSection}
      className={`${baseClass} ${marginTopClass} ${marginBottomClass}`}
    >
      {children}
    </section>
  );
}
