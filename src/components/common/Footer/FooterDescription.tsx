// Next - React
import Image from "next/image";

export default function FooterDescription() {
  return (
    <div className="w-full md:min-w-[290px] md:max-w-[400px] h-auto flex flex-col">
      <div className="w-full max-w-[148px] h-auto mb-[20px]">
        <Image
          src="/logos/logo_m_aventura_new.webp"
          alt="Logo header Mansión Aventura"
          width={148}
          height={72}
          className="w-auto h-full object-cover"
        />
      </div>
      <p className="w-full max-w-[450px] text-paragraphMobile md:max-w-none">
        Mansión Aventura ofrece servicio de fiestas y entretenimiento único en
        Mendoza. Los precios son sujeto a modificaciones en caso de no abonar en
        totalidad.
      </p>
    </div>
  );
}
