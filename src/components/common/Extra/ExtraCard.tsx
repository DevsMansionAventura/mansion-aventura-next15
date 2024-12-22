// Next - React
import Image from "next/image";
// Types
import type { ExtraCardProps } from "@/types/components";

export default function ExtraCard({
  text,
  srcIcon,
  altImg,
  className,
}: ExtraCardProps) {
  return (
    <div
      className={`w-full max-w-[150px] h-[160px] rounded-md bg-gradient-to-r from-pink to-blue p-[2px] ${className} `}
    >
      <div className="w-full h-full flex flex-col justify-start items-center rounded-md bg-purpleDark overflow-hidden pt-[25px]">
        <div className="w-full max-w-[65px] h-[65px] rounded-md bg-gradient-to-r from-pink to-blue flex justify-center items-center">
          <div className="w-[25px] h-[25] flex">
            <Image
              src={srcIcon}
              alt={altImg}
              width={31}
              height={31}
              className="w-full h-auto object-cover object-center"
            />
          </div>
        </div>
        <div>
          <p className="w-full max-w-[110px] mt-[10px] text-center text-paragraphMobile">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
