import BannerSection from "@/components/sections/banner/BannerSection";
import BrandSection from "@/components/sections/brands/BrandSection";
import HomeSection from "@/components/sections/home/HomeSection";
import NewArrivalSection from "@/components/sections/newArrival/NewArrivalSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <BrandSection />
      <NewArrivalSection />
      <BannerSection />
    </div>
  );
}
