// Components
import SectionWrapper from "../common/StructElements/SectionWrapper";
import TitleDescription from "../common/Reserve/TitleDescription";
import CardsSwiper from "../common/Reserve/CardsSwiper";
// Models
import { MansionData } from "@/models/CardsData";

export default function LaMansionSection() {
  return (
    <SectionWrapper idSection="section2">
      <TitleDescription
        title="Salones de "
        titleColor="La Mansión"
        paragraph="Nuestros salones son los ambientes únicos para fiestas inolvidables: Descubre y reserva."
      />
      <CardsSwiper infoCards={MansionData} salonCategory="La Mansión" />
    </SectionWrapper>
  );
}
