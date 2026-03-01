import Hero from "../components/Hero/Hero";
import FamilyStory from "../components/FamilyStory/FamilyStory";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <FamilyStory />
      <Features />
      <Gallery />
      <section id="contacto" />
    </>
  );
}