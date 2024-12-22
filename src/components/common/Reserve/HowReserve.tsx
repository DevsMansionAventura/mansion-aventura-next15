// Components
import TitleColors from "../StructElements/TitleColors";
import ButtonColors from "../StructElements/ButtonColors";

export default function HowReserve() {
  return (
    <div className="w-full h-auto auto-rows-max grid grid-cols-1 gap-[15px] text-center justify-items-center md:gap-[20px] md:justify-items-start md:text-start md:order-2">
      <TitleColors text="¿Cómo " colorText="Reservar?" />
      <p className="w-full max-w-[450px] text-paragraphMobile md:max-w-none">
        Si tienes dudas, aquí encontrarás toda la información necesaria para
        asegurarte de que tu experiencia sea fluida y sencilla.
      </p>
      <ButtonColors text="Saber más" sectionTo="section1" />
    </div>
  );
}
