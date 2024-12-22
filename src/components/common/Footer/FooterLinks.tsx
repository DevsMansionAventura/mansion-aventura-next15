// Components
import AboutUs from "./AboutUs";
import Contact from "../StructElements/Contact";

export default function FooterLinks() {
  return (
    <div className="w-full h-auto grid grid-cols-1 auto-rows-max justify-items-center gap-[40px] md:grid-cols-2">
      <AboutUs />
      <Contact />
    </div>
  );
}
