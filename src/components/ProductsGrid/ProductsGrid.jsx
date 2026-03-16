import { Link } from "react-router-dom";
import { PRODUCTS } from "../productsData";
import "./ProductsGrid.css";

export default function ProductsGrid() {
  return (
    <section id="productos" className="pg-section">
      <div className="pg-inner">

        <header className="pg-hero">

          {/* TEXTO */}
          <div className="pg-heroContent">

            <h1 className="pg-h1">PRODUCTOS</h1>

            <p className="pg-intro">
              Desarrollamos componentes tejidos para prendas corporativas,
              deportivas y promocionales, con la flexibilidad de trabajar cada
              pieza de forma independiente o integrada al diseño general.
            </p>

            <div className="pg-copy">

              <p className="pg-lead">
                En polos, por ejemplo, el cuello y la pretina pueden compartir
                el mismo diseño para construir una estética uniforme o
                resolverse por separado, combinando colores, rayas y patrones
                distintos.
              </p>

              <p className="pg-lead">
                Esa misma lógica se aplica a pretinas dobles deportivas y
                pretinas de buzo, permitiendo mantener coherencia visual o
                generar contrastes según la identidad de cada prenda.
              </p>

            </div>

            <div className="pg-heroActions">
              <a href="#productos-grid" className="pg-heroLink">
                Explorar productos
              </a>
            </div>

          </div>

          {/* IMAGEN */}
          <div className="pg-heroVideo">

            <img
              src="/productGrid.png"
              className="pg-video"
              alt="Componentes tejidos Soltex"
            />

          </div>

        </header>

        <div className="pg-sep" />

        {/* GRID DE PRODUCTOS */}

        <div id="productos-grid" className="pg-grid">

          {PRODUCTS.map((product) => (

            <article key={product.id} className="pg-card">

              <Link
                to={`/productos/${product.id}`}
                className="pg-cardLink"
              >

                <div className="pg-cardMedia">

                  <img
                    className="pg-cardImage"
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    style={{
                      objectPosition:
                        product.cardPosition || "center center"
                    }}
                  />

                  <div className="pg-cardOverlay" />

                  <div className="pg-cardCaption">

                    <div className="pg-cardCaptionText">

                      <span className="pg-cardEyebrow">
                        Ver producto
                      </span>

                      <h3 className="pg-cardTitle">
                        {product.title}
                      </h3>

                    </div>

                    <span className="pg-cardArrow" />

                  </div>

                </div>

              </Link>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}