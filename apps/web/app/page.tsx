import Hero from "../components/home/Hero";
import VehicleSearch from "../components/home/VehicleSearch";
import HowItWorks from "../components/home/HowItWorks";
import FeaturedListings from "../components/home/FeaturedListings";
import PopularBrands from "../components/home/PopularBrands";
import PopularParts from "../components/home/PopularParts";
import CTA from "../components/home/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VehicleSearch />
      <HowItWorks />
      <FeaturedListings />
      <PopularBrands />
      <PopularParts />
      <CTA />
    </main>
  );
}