// Components
import TitleColors from "../StructElements/TitleColors";
// Types
import type { TitleDescriptionProps } from "@/types/components";

export default function TitleDescription({
  title,
  titleColor,
  paragraph,
}: TitleDescriptionProps) {
  return (
    <div className="w-full h-auto text-center grid grid-cols-1 justify-items-center mb-[15px] gap-[10px] md:gap-[15px] md:mb-[20px]">
      <TitleColors text={title} colorText={titleColor} withBr />
      <p className="w-full max-w-[450px] text-paragraphMobile">{paragraph}</p>
    </div>
  );
}
