// Components
import SectionWrapper from "../common/StructElements/SectionWrapper";
import FooterDescription from "../common/Footer/FooterDescription";
import FooterLinks from "../common/Footer/FooterLinks";

export default function Footer() {
  return (
    <SectionWrapper idSection="section2" withoutMB>
      <div className="w-full h-auto grid grid-cols-1 gap-[40px] auto-rows-auto items-center md:grid-cols-[1fr_auto]">
        <FooterDescription />
        <FooterLinks />
      </div>
    </SectionWrapper>
  );
}
