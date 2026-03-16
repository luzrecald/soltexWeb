import "./CustomizationSteps.css";

const STEPS = [
  {
    heading: "Envíanos tu diseño",
    desc: "Envíanos tu diseño o referencia por WhatsApp para comenzar el desarrollo.",
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
    <section className="process-section" aria-labelledby="process-title">
      <div className="process-section__inner">

        <header className="process-section__header">
          <p className="process-section__kicker">Proceso</p>

          <h2 id="process-title" className="process-section__title">
            Cómo personalizar tus cuellos y pretinas
          </h2>
        </header>

        <div className="process-section__grid" role="list">
          {STEPS.map((step) => (
            <article className="process-card" key={step.heading} role="listitem">

              <div className="process-card__media">
                <img src={step.image} alt={step.heading} loading="lazy" />
              </div>

              <div className="process-card__content">
                <h3 className="process-card__title">{step.heading}</h3>
                <p className="process-card__desc">{step.desc}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}