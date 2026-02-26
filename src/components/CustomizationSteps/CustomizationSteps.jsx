import "./CustomizationSteps.css";

const STEPS = [
  {
    title: "Paso 1",
    heading: "Envíanos tu diseño",
    desc: "Enviános tu diseño o referencia por WhatsApp para comenzar el desarrollo.",
    image: "/step1.png",
  },
  {
    title: "Paso 2",
    heading: "Definimos colores",
    desc: "Definimos los colores y combinaciones que formarán parte del tejido.",
    image: "/step2.png",
  },
  {
    title: "Paso 3",
    heading: "Medidas y material",
    desc: "Seleccionamos medidas, material y cantidades según tu necesidad.",
    image: "/step3.png",
  },
  {
    title: "Paso 4",
    heading: "Coordinamos entrega",
    desc: "Coordinamos la entrega para que recibas tu pedido sin demoras.",
    image: "/step4.png",
  },
];

export default function CustomizationSteps() {
  return (
    <section className="cs2-section">
      <div className="cs2-inner">
        <header className="cs2-header">
          <h2 className="cs2-h2">Cómo personalizar tus productos con Soltex</h2>
        </header>

        <div className="cs2-grid" role="list">
          {/* Línea conectora (desktop) */}
          <div className="cs2-line" aria-hidden="true" />

          {STEPS.map((s, idx) => (
            <article className="cs2-item" key={s.title} role="listitem">
              <div className="cs2-illustration">
                <img src={s.image} alt={s.heading} loading="lazy" />
              </div>

              <div className="cs2-dotWrap" aria-hidden="true">
                <div className="cs2-dot">{idx + 1}</div>
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