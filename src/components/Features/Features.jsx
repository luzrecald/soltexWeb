import { useEffect, useRef } from "react";
import "./Features.css";

const ITEMS = [
  {
    title: "Armonía / Contraste de color",
    text: "Antes de la producción del pedido, definimos con el cliente los colores a utilizar en la fabricación de los cuellos y pretinas, logrando coincidencias exactas o contrastes según el resultado deseado.",
    img: "/features/color.png",
    alt: "Selección de color para componentes tejidos",
  },
  {
    title: "Medidas ajustadas",
    text: "Trabajamos con medidas estándares y personalizadas, adaptándonos a distintos tamaños y requerimientos, incluyendo talles especiales como minis o XXXL.",
    img: "/features/medidas.png",
    alt: "Medición y ajuste de componentes tejidos",
  },
  {
    title: "Diseños únicos",
    text: "Fabricamos productos con diseños personalizados, utilizando rayas, patrones y textos para crear cuellos y pretinas únicos.",
    img: "/features/diseno.png",
    alt: "Diseños textiles personalizados para cuellos y pretinas",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = Array.from(root.querySelectorAll(".fh-reveal"));
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
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="fh-features"
      aria-labelledby="features-title"
      ref={sectionRef}
    >
      <div className="fh-featuresInner">
        <header className="fh-featuresHeader fh-reveal" style={{ "--d": "0ms" }}>
          <p className="fh-featuresKicker">OFRECEMOS</p>

          <h2 id="features-title" className="fh-featuresTitle">
            Desarrollo textil a medida
          </h2>

        </header>

        <div className="fh-featuresList" role="list">
          {ITEMS.map((item, idx) => (
            <article
              key={item.title}
              className="fh-featureCard fh-reveal"
              style={{ "--d": `${idx * 120}ms` }}
              role="listitem"
            >
              <div className="fh-featureMedia">
                <img src={item.img} alt={item.alt} loading="lazy" />
              </div>

              <div className="fh-featureContent">
                <h3 className="fh-featureHeading">{item.title}</h3>
                <p className="fh-featureText">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}