// Types
import type { TitleColors } from "@/types/components";

export default function TitleColors({ text, colorText, withBr }: TitleColors) {
  return (
    <h1 className="text-white font-orbitron text-titleMobile font-medium max-w-[450px] md:text-title md:max-w-none">
      {text} {withBr && <br className="md:hidden" />}
      <span className="text-transparent bg-clip-text bg-gradient-to-right bg-gradient-to-r from-pink to-blue">
        {colorText}
      </span>
    </h1>
  );
}
