
import Navbar from "@/Shared/Navbar";
import Image from "next/image";
import Banner from "./ComponentData/HomePage/Banner";
import CardSection from "./ComponentData/HomePage/CardSection";
import SpecialBonusSection from "./ComponentData/HomePage/SpecialBonusSection";
import Testmonials from "./ComponentData/HomePage/Testmonials";
import OurBlog from "./ComponentData/HomePage/OurBlog";

export default function Home() {
  return (
   <div>
      <Banner></Banner>
      <CardSection></CardSection>
      <SpecialBonusSection></SpecialBonusSection>
      <Testmonials></Testmonials>
      <OurBlog></OurBlog>
   </div>
  );
}
