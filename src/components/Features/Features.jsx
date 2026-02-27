import { useEffect, useRef } from "react";
import "./Features.css";

const ITEMS = [
  {
    title: "Armonía/Contraste de color",
    text:
      "Antes de la producción del pedido, definimos con el cliente los colores a utilizar en la fabricación de los cuellos y pretinas, logrando coincidencias exactas o contrastes según el resultado deseado.",
    img: "/features/color.jpg",
    alt: "Selección de hilo y ajuste de color para cuellos y pretinas tejidos",
  },
  {
    title: "Medidas ajustadas",
    text:
      "Trabajamos con medidas estándares y personalizadas, adaptándonos a distintos tamaños y requerimientos, incluyendo talles especiales como minis o XXXL.",
    img: "/features/medidas.jpg",
    alt: "Control de medidas y terminaciones en componentes tejidos",
  },
  {
    title: "Diseños únicos",
    text:
      "Fabricamos productos con diseños personalizados, utilizando rayas, patrones y textos para crear cuellos y pretinas únicos.",
    img: "/features/diseno.jpeg",
    alt: "Muestras de diseños tejidos personalizados con patrones y textos",
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

    const rows = Array.from(root.querySelectorAll(".fh-featureRow"));
    if (rows.length === 0) return;

    if (prefersReduced) {
      rows.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    rows.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="fh-features" aria-label="Ofrecemos" ref={sectionRef}>
      <div className="fh-featuresInner">
        <header className="fh-featuresHeader">
          <h2 className="fh-featuresTitle">OFRECEMOS</h2>
        </header>

        <div className="fh-featuresList" role="list">
          {ITEMS.map((item, idx) => (
            <article
              key={item.title}
              className={`fh-featureRow ${idx % 2 === 1 ? "is-reversed" : ""}`}
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