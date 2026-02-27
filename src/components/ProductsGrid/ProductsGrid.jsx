import { useEffect, useMemo, useState } from "react";
import "./ProductsGrid.css";

const MEASURE_PRETINAS_DOBLES = (
  <>
    <div>Se fabrican en tiras de 120 cm para optimizar el aprovechamiento del material en producción.</div>
    <div>Una tira puede cubrir cuello y puños cuando comparten diseño.</div>
    <div>
      En desarrollos con diseños distintos, o cuando el cliente requiere únicamente cuellos o puños,
      se ajustan las cantidades de tiras para cubrir exactamente lo necesario.
    </div>
  </>
);

const MEASURE_PRETINAS_BUZO = (
  <>
    <div>Se fabrican en tiras de 120 cm.</div>
    <div>Las cantidades se calculan en función de cuello, cintura y mangas.</div>
    <div>Esto permite cubrir cada componente de manera precisa según el requerimiento del cliente.</div>
  </>
);

const PRODUCTS = [
  {
    id: "cuellos-polo",
    title: "Cuellos para Polo",
    image: "/product1.png",
    panelImages: ["/cuellosparapolo1.png", "/cuellosparapolo2.jpg"],
    specs: [
      [
        "Diseño",
        <>
          <div>Liso</div>
          <div>Rayas</div>
          <div>Patrones</div>
          <div>Letras</div>
        </>,
      ],
      [
        "Medidas",
        <>
          <div>32 cm</div>
          <div>34 cm</div>
          <div>36 cm</div>
          <div>38 cm</div>
          <div>40 cm</div>
          <div>42 cm</div>
          <div>44 cm</div>

          <br />

          <div>(Medidas estándar)</div>
          <div>También desarrollamos otras medidas para talles especiales, muy grandes o muy pequeños.</div>
        </>,
      ],
      [
        "Material",
        <>
          <div>Algodón</div>
          <div>Poliéster</div>
        </>,
      ],
    ],
  },
  {
    id: "pretinas-polo",
    title: "Pretinas para Polo",
    image: "/product2.jpeg",
    panelImages: ["/pretinasparapolo1.png", "/pretinasparapolo2.png"],
    specs: [
      [
        "Diseño",
        <>
          <div>Liso</div>
          <div>Rayas</div>
          <div>Patrones</div>
          <div>Letras</div>

          <br />

          <div>Puede ir a juego con los cuellos o desarrollarse de manera individual.</div>
        </>,
      ],
      [
        "Medidas",
        <>
          <div>32 cm de largo</div>
          <div>O de acuerdo a los requerimientos del cliente.</div>
        </>,
      ],
    ],
  },
  {
    id: "pretinas-dobles-deportivas",
    title: "Pretinas Dobles Deportivas",
    image: "/product3.png",
    panelImages: ["/pretinasdoblesdeportivas1.png", "/pretinasdoblesdeportivas2.jpg"],
    applications: ["Camisetas deportivas", "Musculosas", "Remeras escolares de educación física"],
    specs: [
      [
        "Diseño",
        <>
          <div>Liso</div>
          <div>Rayas</div>
          <div>Patrones</div>
          <div>Letras</div>
        </>,
      ],
      ["Medidas", MEASURE_PRETINAS_DOBLES],
    ],
  },
  {
    id: "pretinas-buzo",
    title: "Pretinas de Buzo",
    image: "/product4.png",
    panelImages: ["/pretinasdebuzo1.png", "/pretinasdebuzo2.png"],
    applications: ["Camperas deportivas", "Camperas tipo bomber"],
    specs: [
      [
        "Diseño",
        <>
          <div>Liso</div>
          <div>Rayas</div>
          <div>Patrones</div>
          <div>Letras</div>
        </>,
      ],
      ["Medidas", MEASURE_PRETINAS_BUZO],
    ],
  },
];

function chunkRows(items, columns) {
  const rows = [];
  for (let i = 0; i < items.length; i += columns) rows.push(items.slice(i, i + columns));
  return rows;
}

// ✅ columnas responsivas también en JS para que el panel se inserte debajo de la fila correcta
function useResponsiveColumns() {
  const getCols = () => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;
    if (w <= 980) return 2;
    return 4;
  };

  const [cols, setCols] = useState(getCols);

  useEffect(() => {
    const onResize = () => setCols(getCols());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return cols;
}

export default function ProductsGrid() {
  const [activeId, setActiveId] = useState(null);

  const columns = useResponsiveColumns();
  const rows = useMemo(() => chunkRows(PRODUCTS, columns), [columns]);

  const activeProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === activeId) || null,
    [activeId]
  );

  const rowIndexWithActive = useMemo(() => {
    if (!activeId) return -1;
    const idx = PRODUCTS.findIndex((p) => p.id === activeId);
    return idx < 0 ? -1 : Math.floor(idx / columns);
  }, [activeId, columns]);

  return (
    <section id="productos" className="pg-section">
      <div className="pg-inner">
        <header className="pg-header">
          <h1 className="pg-h1">PRODUCTOS</h1>

          <div className="pg-leads">
            <p className="pg-lead">
              Nuestros componentes tejidos pueden desarrollarse en conjunto o de manera independiente,
              adaptándose al diseño de cada prenda.
            </p>
            <p className="pg-lead">
              En las prendas polo, por ejemplo, el cuello y la pretina pueden compartir el mismo diseño
              para lograr una estética uniforme, o trabajarse por separado, combinando colores, rayas o
              patrones distintos.
            </p>
            <p className="pg-lead">
              Esta misma flexibilidad se aplica a las pretinas dobles deportivas y a las pretinas de buzo,
              permitiendo mantener coherencia visual o generar contrastes según el resultado buscado.
            </p>
          </div>

          {/* ✅ SOLO UNA raya */}
          <div className="pg-sep" />
        </header>

        <div className="pg-rows">
          {rows.map((row, rIdx) => (
            <div className="pg-row" key={`row-${rIdx}`}>
              <div className="pg-grid" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
                {row.map((p) => {
                  const isActive = p.id === activeId;

                  return (
                    <button
                      key={p.id}
                      type="button"
                      className={`pg-card ${isActive ? "is-active" : ""}`}
                      onClick={() => setActiveId((curr) => (curr === p.id ? null : p.id))}
                      aria-expanded={isActive}
                    >
                      <div className="pg-media">
                        <img className="pg-image" src={p.image} alt={p.title} loading="lazy" />
                        <span className={`pg-chevron ${isActive ? "is-open" : ""}`} aria-hidden="true" />
                      </div>

                      <div className="pg-label">
                        <span className="pg-labelText">{p.title}</span>
                        <span className={`pg-labelArrow ${isActive ? "is-open" : ""}`} aria-hidden="true" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {rIdx === rowIndexWithActive && activeProduct && (
                <div className="pg-panel">
                  <div className="pg-panelInner">
                    <div className="pg-panelText">
                      <h3 className="pg-title">{activeProduct.title}</h3>

                      <div className="pg-cols">
                        {activeProduct.applications && (
                          <div className="pg-col">
                            <h4>Aplicaciones típicas</h4>
                            <ul>
                              {activeProduct.applications.map((a) => (
                                <li key={a}>{a}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="pg-col">
                          <dl className="pg-specs">
                            {activeProduct.specs.map(([label, value]) => (
                              <div className="pg-spec" key={label}>
                                <dt>{label}</dt>
                                <dd>{value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>
                    </div>

                    <div className="pg-panelMedia" aria-hidden="true">
                      {(activeProduct.panelImages?.length ? activeProduct.panelImages : [activeProduct.image])
                        .slice(0, 2)
                        .map((src, i) => (
                          <img key={`${activeProduct.id}-panel-${i}`} src={src} alt="" loading="lazy" />
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}