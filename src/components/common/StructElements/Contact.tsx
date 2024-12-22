// Next - React
import Image from "next/image";

export default function Contact() {
  return (
    <div className="w-full min-w-[210px] max-w-[223px] text-center h-auto grid gird-cols-1 auto-rows-max justify-items-center gap-[10px]">
      <p className="w-full max-w-max h-auto font-orbitron font-bold text-paragraph">
        Contacto
      </p>
      <div className="w-full max-w-max h-auto flex">
        <div className="w-[24px] h-auto mr-[5px]">
          <Image
            src="/icons/Instagram_icon.svg"
            alt="Instagram icon"
            width={28}
            height={27}
            className="w-full h-auto object-cover"
          />
        </div>
        <a
          href="https://www.instagram.com/mansion.aventura?igsh=MXNzNWt0dGZmd3VucQ=="
          target="_blank"
          className="w-full max-w-max h-auto text-paragraphMobile cursor-pointer hover:underline"
        >
          @mansion.aventura
        </a>
      </div>
      <p className="w-full max-w-max h-auto text-paragraphMobile">
        2024 © Mansión Aventura. Todos los derechos reservados.
      </p>
    </div>
  );
}
