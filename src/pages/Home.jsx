import Hero from "../components/Hero/Hero";
import FamilyStory from "../components/FamilyStory/FamilyStory";
import Features from "../components/Features/Features";
import HomeProductsPreview from "../components/HomeProductsPreview/HomeProductsPreview";
import CustomizationIntro from "../components/CustomizationIntro/CustomizationIntro";
import CustomizationSteps from "../components/CustomizationSteps/CustomizationSteps";
import Gallery from "../components/Gallery/Gallery";
import ContactSection from "../components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FamilyStory />
      <HomeProductsPreview />
      <Features />
      <CustomizationSteps />
      <Gallery />
    </>
  );
}