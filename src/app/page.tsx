import Banner from "@/components/Banner";
import DaysBanner from "@/components/DaysBanner";
import Header from "@/components/Header";
import MissionData from "@/components/Mission";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <MissionData />
      <DaysBanner />
    </div>
  );
}
