// Next - React
import Image from "next/image";

export default function ReserveImage() {
  return (
    <div className="w-[70%] max-w-[350px] mx-auto h-auto md:order-1 md:mx-0 md:min-w-[310px]">
      <Image
        src="/images/image_reserva.webp"
        alt="Imagen de chica y signo de pregunta"
        width={343}
        height={283}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
