import { useEffect, useRef } from "react";
import "./FamilyStory.css";

export default function FamilyStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = Array.from(root.querySelectorAll(".story-reveal"));
    if (elements.length === 0) return;

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="empresa"
      className="story"
      aria-labelledby="story-title"
      ref={sectionRef}
    >
      <div className="story-inner">
        <div className="story-grid">
          <div
            className="story-media story-reveal"
            aria-hidden="true"
            style={{ "--d": "0ms" }}
          >
            <img src="/family-story.png" alt="" loading="lazy" />
          </div>

          <div
            className="story-content story-reveal"
            style={{ "--d": "140ms" }}
          >
            <p className="story-kicker">EMPRESA FAMILIAR</p>

            <h2 className="story-title" id="story-title">
              Una trayectoria construida con consistencia
            </h2>

            <div className="story-prose">
              <p>
                Soltex nació en 2011 como un emprendimiento familiar,
                impulsado por la necesidad de fabricar cuellos y pretinas
                tejidos en un contexto donde la oferta local era limitada.
              </p>

              <p>
                Desde sus inicios, la empresa ha construido un camino de
                crecimiento sostenido, basado en la experiencia, el trabajo
                constante y la visión de desarrollar componentes tejidos de
                alta calidad.
              </p>

              <p>
                Hoy colaboramos con marcas y fábricas que buscan precisión,
                identidad y excelencia en cada prenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}