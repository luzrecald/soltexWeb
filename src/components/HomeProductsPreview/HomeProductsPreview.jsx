import { Link } from "react-router-dom";
import { PRODUCTS } from "../productsData";
import "./HomeProductsPreview.css";

export default function HomeProductsPreview() {
  return (
    <section
      className="products-preview"
      aria-labelledby="products-preview-title"
    >
      <div className="products-preview__inner">
        <header className="products-preview__header">
          <p className="products-preview__kicker">Nuestros productos</p>

          <h2
            id="products-preview-title"
            className="products-preview__title"
          >
            Componentes tejidos para distintos tipos de prendas
          </h2>

          <p className="products-preview__lead">
            Desarrollamos cuellos y pretinas tejidos para prendas corporativas,
            deportivas y escolares, con distintas opciones de diseño, material y
            medida.
          </p>
        </header>

        <div className="products-preview__grid">
          {PRODUCTS.map((product) => (
            <article key={product.id} className="products-preview__item">
              <Link
                to={`/productos/${product.id}`}
                className="products-preview__link"
              >
                <div className="products-preview__media">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    style={{ "--pos": product.cardPosition || "center center" }}
                  />
                </div>

                <div className="products-preview__content">
                  <h3 className="products-preview__name">{product.title}</h3>
                  <p className="products-preview__desc">
                    {product.shortDescription}
                  </p>
                  <span className="products-preview__cta">Ver producto</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}