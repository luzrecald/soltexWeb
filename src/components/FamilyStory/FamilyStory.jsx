import "./FamilyStory.css";

export default function FamilyStory() {
  return (
    <section className="story-section" aria-labelledby="story-title">
      <div className="story-container">
        <div className="story-surface">
          {/* Capa imagen + fade */}
          <div
            className="story-bg"
            style={{ backgroundImage: "url(/family-story.png)" }}
            aria-hidden="true"
          />

          {/* Texto */}
          <div className="story-content">
            <p className="story-kicker">Empresa familiar</p>

            <h2 className="story-title" id="story-title">
              Una trayectoria construida con consistencia
            </h2>

            <p className="story-text">
              Soltex nació en 2011 como un emprendimiento familiar, impulsado por
              la necesidad de fabricar cuellos y pretinas tejidos en un contexto
              donde la oferta local era limitada.
            </p>

            <p className="story-text">
              Desde sus inicios, la empresa ha construido un camino de crecimiento
              sostenido, basado en la experiencia, el trabajo constante y la visión
              de desarrollar componentes tejidos de alta calidad. La incorporación
              de tecnología, la optimización de procesos y la ampliación de la
              capacidad productiva han sido pilares fundamentales de esta evolución.
            </p>

            <p className="story-text">
              Hoy, Soltex se posiciona como una de las pocas empresas especializadas
              en cuellos y pretinas tejidos personalizados, colaborando con marcas,
              talleres y fábricas que buscan precisión, identidad y excelencia en
              cada prenda.
            </p>

            <p className="story-text story-text-last">
              Nuestro crecimiento es el resultado del compromiso diario, la mejora
              continua y la convicción de apostar por la producción nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}