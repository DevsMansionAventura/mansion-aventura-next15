// Types
import type { WrapperExtraProps } from "@/types/components";

export default function WrapperExtra({ children }: WrapperExtraProps) {
  return (
    <div className="w-full h-auto grid grid-cols-2 justify-items-center gap-x-[20px] gap-y-[30px] md:gap-x-0 md:grid-cols-12 md:max-w-[1050px] md:mx-auto">
      {children}
    </div>
  );
}
