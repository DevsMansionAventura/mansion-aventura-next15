// Components
import SectionWrapper from "../common/StructElements/SectionWrapper";
import WrapperGrid from "../common/StructElements/WrapperGrid";
import HowReserve from "../common/Reserve/HowReserve";
import ReserveImage from "./ReserveImage";

export default function ReserveSection() {
  return (
    <SectionWrapper idSection="section1">
      <WrapperGrid imgLeft>
        <ReserveImage />
        <HowReserve />
      </WrapperGrid>
    </SectionWrapper>
  );
}
