import "./CustomizationIntro.css";

export default function CustomizationIntro() {
  return (
    <section className="custom-intro" id="personalizacion">
      <div className="custom-intro__inner">

        <header className="custom-intro__header">

          <p className="custom-intro__kicker">
            Personalización
          </p>

          <h2 className="custom-intro__title">
            Desarrollo textil a medida
          </h2>

          <p className="custom-intro__lead">
            Cada proyecto se desarrolla en función del diseño de la prenda,
            combinando material, medida y estética para lograr componentes
            tejidos que se integren de manera precisa al producto final.
          </p>

        </header>

        <div className="custom-intro__grid">

          <div className="custom-intro__item">
            <h3>Material</h3>
            <p>
              Trabajamos principalmente con algodón y poliéster,
              seleccionando el material según el tipo de prenda,
              resistencia requerida y acabado deseado.
            </p>
          </div>

          <div className="custom-intro__item">
            <h3>Medidas</h3>
            <p>
              Las dimensiones de cuellos y pretinas se ajustan
              al diseño de cada prenda, contemplando talles,
              proporciones y requerimientos específicos del cliente.
            </p>
          </div>

          <div className="custom-intro__item">
            <h3>Diseño</h3>
            <p>
              Los componentes pueden desarrollarse en versiones lisas,
              con rayas, patrones o textos tejidos, permitiendo construir
              identidad visual en cada prenda.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}