import "./CustomizationSteps.css";

const STEPS = [
  {
    heading: "Envíanos tu diseño",
    desc: "Enviános tu diseño o referencia por WhatsApp para comenzar el desarrollo.",
    image: "/step1.png",
  },
  {
    heading: "Definimos colores",
    desc: "Definimos los colores y combinaciones que formarán parte del tejido.",
    image: "/step2.png",
  },
  {
    heading: "Medidas y material",
    desc: "Seleccionamos medidas, material y cantidades según tu necesidad.",
    image: "/step3.png",
  },
  {
    heading: "Coordinamos entrega",
    desc: "Coordinamos la entrega para que recibas tu pedido sin demoras.",
    image: "/step4.png",
  },
];

export default function CustomizationSteps() {
  return (
    <section className="cs2-section" aria-label="Cómo personalizar tus productos con Soltex">
      <div className="cs2-inner">
        <header className="cs2-header">
          <h2 className="cs2-h2">Cómo personalizar tus productos</h2>
          <p className="cs2-lead">
            Un proceso claro para llevar tu identidad visual al tejido, con consistencia y precisión.
          </p>
        </header>

        <div className="cs2-grid" role="list">
          {STEPS.map((s) => (
            <article className="cs2-item" key={s.heading} role="listitem">
              <div className="cs2-media">
                <img src={s.image} alt={s.heading} loading="lazy" />
              </div>

              <h3 className="cs2-title">{s.heading}</h3>
              <p className="cs2-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}