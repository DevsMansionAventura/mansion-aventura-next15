// Components
import SectionWrapper from "../common/StructElements/SectionWrapper";
import TitleDescription from "../common/Reserve/TitleDescription";
import WrapperExtra from "../common/Extra/WrapperExtra";
import ExtraCard from "../common/Extra/ExtraCard";
// Model
import { ExtraCardsData } from "@/models/ExtraCardsData";

export default function ExtraSection() {
  return (
    <SectionWrapper idSection="section4">
      <TitleDescription
        title="Servicios "
        titleColor="+ Extra"
        paragraph="Nuestros salones ofrecen servicios adicionales para brindarte una experiencia aún más enriquecedora."
      />
      <WrapperExtra>
        {ExtraCardsData.map((card, index) => (
          <ExtraCard
            key={index}
            srcIcon={card.srcIcon}
            altImg={card.altImg}
            text={card.text}
            className={`${
              index === ExtraCardsData.length - 1
                ? "col-span-2 justify-self-center"
                : ""
            } ${
              ExtraCardsData.length < 8 &&
              (index === 4 || index === 5 || index === 6)
                ? "md:col-span-4"
                : "md:col-span-3"
            }`}
          />
        ))}
      </WrapperExtra>
    </SectionWrapper>
  );
}
