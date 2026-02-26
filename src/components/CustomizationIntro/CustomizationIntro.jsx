import { useEffect, useRef } from "react";
import "./CustomizationIntro.css";

const BLOCKS = [
  {
    title: "Medidas y material",
    paragraphs: [
      "Trabajamos con medidas estándar, pero también nos adaptamos a talles especiales, desde piezas extra grandes hasta talles muy pequeños.",
      "La composición puede realizarse en algodón o poliéster, dependiendo del comportamiento y la estética buscada.",
      "El algodón ofrece un tacto suave y natural. El poliéster aporta mayor resistencia y estabilidad.",
    ],
    image: "/customizationintro2.png",
    alt: "Cuellos y pretinas tejidos en distintos colores",
  },
  {
    title: "Diseño",
    paragraphs: [
      "Cada componente se desarrolla a partir de un color base definido por el cliente, que puede complementarse con rayas, letras o patrones.",
      "Los colores y combinaciones se trabajan cuidadosamente para garantizar consistencia visual y reproducibilidad en producción.",
    ],
    image: "/customizationintro3.jpg",
    alt: "Ejemplos de combinaciones de color y diseño tejido",
  },
];

function Block({ title, paragraphs, image, alt, flip }) {
  return (
    <section className={`ci-block ${flip ? "ci-block-flip" : ""}`} data-reveal>
      <div className="ci-media">
        <img className="ci-image" src={image} alt={alt} loading="lazy" />
        <div className="ci-image-glow" aria-hidden="true" />
      </div>

      <div className="ci-content">
        <h2 className="ci-title">{title}</h2>

        <div className="ci-prose">
          {paragraphs.map((p, i) => (
            <p key={i} className="ci-p">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CustomizationIntro() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll("[data-reveal]"));
    if (nodes.length === 0) return;

    // Estado inicial (por si el CSS se carga después)
    nodes.forEach((el) => el.classList.add("ci-reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ci-reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="ci-section" ref={rootRef}>
      <header className="ci-header" data-reveal>
        <div className="ci-inner">
          <div className="ci-eyebrow">Personalización</div>

          {/* ✅ Título más humano/premium */}
          <h1 className="ci-h1">Del concepto al tejido</h1>

          <p className="ci-lead">
            Desarrollamos componentes tejidos pensados para adaptarse a la identidad visual y
            garantizar un resultado consistente, preciso y alineado con tu prenda.
          </p>
        </div>
      </header>

      <div className="ci-wrap">
        {BLOCKS.map((b, idx) => (
          <Block key={b.title} {...b} flip={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}