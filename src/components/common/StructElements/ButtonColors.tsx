"use client";
// Next - React
import { useState } from "react";
// Types
import type { ButtonColorsProps } from "@/types/components";
// Components
import CrossIcon from "./CrossIcon";

export default function ButtonColors({
  text,
  link,
  scrollToSection,
  sectionTo,
  isExtraService,
  cardInfo,
  salonCategory,
}: ButtonColorsProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const wspUrl = "https://api.whatsapp.com/send";
  const phoneNumber = "+5492616955777";
  const msjPart1 =
    "Hola Mansión Aventura! Me gustaría saber si hay disponibilidad para el ";
  const msjPart2 = " de los salones ";
  const extraService =
    " con servicios *Extra* y saber cuáles son sus precios, muchas gracias.";
  const noExtraService = " y saber cuáles son sus precios, muchas gracias.";
  const alma_wsp = `${wspUrl}?phone=${phoneNumber}&text=${
    msjPart1 +
    "*" +
    cardInfo?.title +
    "*" +
    msjPart2 +
    "*" +
    salonCategory +
    "*" +
    (isExtraService ? extraService : noExtraService)
  }`;

  return (
    <>
      {scrollToSection ? (
        <button
          className="w-max h-auto px-[20px] py-[8px] bg-gradient-to-r from-pink to-blue hover:from-blue hover:to-pink rounded-md transition-colors duration-300 ease-in-out"
          onClick={() => scrollToSection(sectionTo ?? "")}
        >
          {text}
        </button>
      ) : (
        <>
          {link ? (
            <a
              href={link}
              className="w-max h-auto px-[20px] py-[8px] bg-gradient-to-r from-pink to-blue hover:from-blue hover:to-pink rounded-md transition-colors duration-300 ease-in-out"
            >
              {text}
            </a>
          ) : (
            <button
              className="w-max h-auto px-[20px] py-[8px] bg-gradient-to-r from-pink to-blue hover:from-blue hover:to-pink rounded-md transition-colors duration-300 ease-in-out"
              onClick={handlePopupOpen}
            >
              {text}
            </button>
          )}

          {isPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="relative bg-purpleDark px-[15px] py-[25px] rounded-lg shadow-lg w-[90%] max-w-[360px] h-auto md:max-w-[500px] md:px-[30px] md:py-[50px]">
                {cardInfo ? (
                  <div className="w-full h-auto text-start">
                    {salonCategory && (
                      <h2 className="font-bold text-subtitleMobile md:text-subtitle mb-8 text-center">
                        {salonCategory}
                      </h2>
                    )}
                    <p className="text-paragraphMobile md:text-paragraph mb-4">
                      <strong>Servicio:</strong> {cardInfo.title}
                    </p>
                    <p className="text-paragraphMobile md:text-paragraph mb-4">
                      <strong>Capacidad:</strong> {cardInfo.capacity} personas
                    </p>
                    <p className="text-paragraphMobile md:text-paragraph mb-4">
                      <strong>Incluye:</strong> {cardInfo.include}
                    </p>
                    {isExtraService && (
                      <p className="text-paragraphMobile md:text-paragraph mb-4">
                        <strong>+ Extra:</strong> Si
                      </p>
                    )}
                    <div className="w-full h-auto flex justify-center py-4">
                      <a
                        href={alma_wsp}
                        target="_blank"
                        className="w-max h-auto px-[20px] py-[8px] bg-gradient-to-r from-pink to-blue hover:from-blue hover:to-pink rounded-md block"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-auto text-start">
                    <h2 className="font-bold text-subtitleMobile md:text-subtitle mb-8 text-center">
                      ¿Cómo reservar?
                    </h2>
                    <p className="text-paragraphMobile md:text-paragraph">
                      1. Navega a la sección de salones.
                    </p>
                    <p className="mb-4 text-[12px] md:text-[14px]">
                      Estos pueden ser La Mansión o Salones del Patio
                    </p>
                    <p className="text-paragraphMobile md:text-paragraph">
                      2. Selecciona extras adicionales.
                    </p>
                    <p className="mb-4 text-[12px] md:text-[14px]">
                      Si gustas de algunos de los servicios de la sección
                      +Extra, selecciónalo!
                    </p>
                    <p className="text-paragraphMobile md:text-paragraph">
                      3. Revisa tu selección.
                    </p>
                    <p className="mb-4 text-[12px] md:text-[14px]">
                      Verás un resumen con todo lo que planeas reservar
                    </p>
                    <p className="text-paragraphMobile md:text-paragraph">
                      4. Finaliza tu reserva.
                    </p>
                    <p className=" text-[12px] md:text-[14px]">
                      Presiona el botón de Reservar. Esto te llevará a un chat
                      de WhatsApp, con un mensaje prearmado basado en tu pedido,
                      para ponerte en contacto con nosotros!
                    </p>
                  </div>
                )}
                <CrossIcon
                  className="absolute top-[15px] right-[15px] md:top-[30px] md:right-[30px] cursor-pointer"
                  onClick={handlePopupClose}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
