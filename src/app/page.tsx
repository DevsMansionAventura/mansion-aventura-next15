// Components
import Layout from "@/components/layout/Layout";
import ReserveSection from "@/components/home/ReserveSection";
import SliderImageSection from "@/components/home/SliderImageSection";
import LaMansionSection from "@/components/home/LaMansionSection";
import DelPatioSection from "@/components/home/DelPatioSection";
import ExtraSection from "@/components/home/ExtraSection";
import ResetReservation from "@/components/common/StructElements/ResetReservation";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <Layout>
      <ResetReservation />
      <HeroSection />
      <ReserveSection />
      <SliderImageSection />
      <LaMansionSection />
      <DelPatioSection />
      <ExtraSection />
    </Layout>
  );
}
