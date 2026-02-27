import Hero from "../components/Hero/Hero";
import FamilyStory from "../components/FamilyStory/FamilyStory";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="empresa">
        <FamilyStory />
      </section>

      <section id="productos">
        <Gallery />
      </section>

      <section id="personalizacion">
        <Features />
      </section>

      {/* Anchor invisible SOLO para navegación */}
      <section id="contacto" />
    </>
  );
}