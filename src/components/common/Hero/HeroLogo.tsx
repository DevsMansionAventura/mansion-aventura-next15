// Next - React
import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="w-[70%] max-w-[350px] mx-auto h-auto md:order-2 md:mx-0 md:min-w-[310px]">
      <Image
        src="/logos/logo_mansion_castle.webp"
        alt="Mansion Logo Hero"
        width={343}
        height={446}
        priority
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
