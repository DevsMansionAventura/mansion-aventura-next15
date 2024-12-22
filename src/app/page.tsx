// Components
import Layout from "@/components/layout/Layout";
import ReserveSection from "@/components/home/ReserveSection";
// import HeroSection from "@/components/landing/HeroSection";
// import DelPatioSection from "@/components/landing/DelPatioSection";
// import ExtraSection from "@/components/landing/ExtraSection";
import SliderImageSection from "@/components/home/SliderImageSection";
import LaMansionSection from "@/components/home/LaMansionSection";
import DelPatioSection from "@/components/home/DelPatioSection";
import ExtraSection from "@/components/home/ExtraSection";
// import ResetReservation from "@/components/common/ResetReservation";

export default function Home() {
  return (
    <Layout>
      {/* <ResetReservation /> */}
      {/* <HeroSection /> */}
      <ReserveSection />
      <SliderImageSection />
      <LaMansionSection />
      <DelPatioSection />
      <ExtraSection />
    </Layout>
  );
}
