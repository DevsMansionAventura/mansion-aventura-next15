// Types
import type { WrapperGridProps } from "@/types/components";

export default function WrapperGrid({
  children,
  imgLeft = false,
}: WrapperGridProps) {
  return (
    <div
      className={`w-full h-auto grid grid-cols-1 gap-[40px] items-center  ${
        imgLeft
          ? "md:grid-cols-[1fr_1.25fr] md:justify-items-start"
          : "md:grid-cols-[1.25fr_1fr] md:justify-items-end"
      }`}
    >
      {children}
    </div>
  );
}
