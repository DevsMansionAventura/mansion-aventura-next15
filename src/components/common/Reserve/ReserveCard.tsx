"use client";
// Next - React
import Image from "next/image";
import { useState } from "react";
// Types
import type { ReserveCardProps } from "@/types/components";
import ButtonColors from "../StructElements/ButtonColors";

export default function ReserveCard({
  image,
  altImage,
  title,
  capacity,
  include,
  salonCategory,
}: ReserveCardProps) {
  const [isExtraService, setIsExtraService] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsExtraService(e.target.checked);
  };

  return (
    <div className="w-full max-w-[300px] mx-auto h-auto rounded-md bg-gradient-to-r from-pink to-blue p-[2px] xl:max-w-none">
      <div className="flex flex-col rounded-md h-auto w-full items-center justify-center bg-purpleDark overflow-hidden">
        <div className="w-full h-auto">
          <Image
            src={image}
            alt={altImage}
            width={296}
            height={188}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full h-auto p-[8px] grid grid-cols-1 gap-[10px]">
          <p className="w-full max-w-max h-auto font-orbitron font-bold text-paragraph">
            {title}
          </p>
          <p className="w-full max-w-[450px] text-[14px]">
            Capacidad: {capacity} personas
          </p>
          <p className="w-full max-w-[450px] text-[14px] ">
            Incluye: {include}
          </p>
          <div className="w-full h-auto flex justify-between items-center">
            <ButtonColors
              text="Reservar"
              isExtraService={isExtraService}
              cardInfo={{ title, capacity, include }}
              salonCategory={salonCategory}
            />
            <div className="w-full max-w-max h-auto max-h-max justify-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 appearance-none checked:appearance-auto border cursor-pointer border-pink  mr-2 hover:bg-purpleDark hover:border-blue checked:bg-center checked:border-pink accent-blue "
                  checked={isExtraService}
                  onChange={handleCheckboxChange}
                />
                + Extra
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
