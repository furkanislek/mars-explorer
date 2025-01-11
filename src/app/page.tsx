import Banner from "@/components/Banner";
import DaysBanner from "@/components/DaysBanner";
import Exploration from "@/components/Exploration";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import MissionData from "@/components/Mission";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <MissionData />
      <DaysBanner />
      <Exploration />
      <Gallery />
      <Testimonials />
    </div>
  );
}
