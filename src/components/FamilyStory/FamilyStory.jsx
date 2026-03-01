import "./FamilyStory.css";

export default function FamilyStory() {
  return (
    <section id="empresa" className="story" aria-labelledby="story-title">
      <div className="story-inner">
        <div className="story-grid">
          {/* Imagen */}
          <div className="story-media" aria-hidden="true">
            <img src="/family-story.png" alt="" loading="lazy" />
          </div>

          {/* Texto */}
          <div className="story-content">
            <p className="story-kicker">EMPRESA FAMILIAR</p>

            <h2 className="story-title" id="story-title">
              Una trayectoria construida con consistencia
            </h2>

            <div className="story-prose">
              <p>
                Soltex nació en 2011 como un emprendimiento familiar, impulsado por la necesidad de
                fabricar cuellos y pretinas tejidos en un contexto donde la oferta local era limitada.
              </p>

              <p>
                Desde sus inicios, la empresa ha construido un camino de crecimiento sostenido, basado
                en la experiencia, el trabajo constante y la visión de desarrollar componentes tejidos
                de alta calidad.
              </p>

              <p>
                Hoy colaboramos con marcas y fábricas que buscan precisión, identidad y excelencia en
                cada prenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}