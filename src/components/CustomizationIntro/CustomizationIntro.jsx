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
    <article className={`pci-block ${flip ? "pci-block--flip" : ""}`} data-reveal>
      <div className="pci-media">
        <img className="pci-image" src={image} alt={alt} loading="lazy" />
      </div>

      <div className="pci-content">
        <h3 className="pci-title">{title}</h3>

        <div className="pci-prose">
          {paragraphs.map((p, i) => (
            <p key={i} className="pci-p">
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function CustomizationIntro() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll("[data-reveal]"));
    if (nodes.length === 0) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    nodes.forEach((el) => el.classList.add("pci-reveal"));

    if (prefersReduced) {
      nodes.forEach((el) => el.classList.add("pci-reveal-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("pci-reveal-in");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="personalizacion" className="pci-section" ref={rootRef}>
      {/* ✅ Header estilo PRODUCTS (sin pill) */}
      <header className="pci-header" data-reveal>
        <div className="pci-inner">
          <h1 className="pci-mainTitle">PERSONALIZACIÓN</h1>
          <h2 className="pci-subTitle">Del concepto al tejido</h2>

          <div className="pci-leads">
            <p className="pci-lead">
              Desarrollamos componentes tejidos pensados para adaptarse a la identidad visual y
              garantizar un resultado consistente, preciso y alineado con tu prenda.
            </p>
          </div>
        </div>
      </header>

      <div className="pci-wrap">
        <div className="pci-inner">
          <div className="pci-list" role="list">
            {BLOCKS.map((b, idx) => (
              <Block key={b.title} {...b} flip={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}