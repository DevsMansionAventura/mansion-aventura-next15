// Components
import SectionWrapper from "../common/StructElements/SectionWrapper";
import TitleDescription from "../common/Reserve/TitleDescription";
import CardsSwiper from "../common/Reserve/CardsSwiper";
// Models
import { PatioData } from "@/models/CardsData";

export default function DelPatioSection() {
  return (
    <SectionWrapper idSection="section3">
      <TitleDescription
        title="Salones "
        titleColor="Del Patio"
        paragraph="Nuestros salones son los ambientes únicos para fiestas inolvidables: Descubre y reserva."
      />
      <CardsSwiper infoCards={PatioData} salonCategory="Del Patio" />
    </SectionWrapper>
  );
}
