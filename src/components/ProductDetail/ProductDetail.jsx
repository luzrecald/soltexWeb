import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../productsData";
import "./ProductDetail.css";

function SizeGrid({ items }) {
  return (
    <div className="pd-sizeGrid">
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className="pd-sizeCard"
        >
          <span className="pd-sizeMain">Talle de prenda</span>
          <span className="pd-sizeLabel">{item.label}</span>
          <span className="pd-sizeMeta">Medida del cuello</span>
          <span className="pd-sizeSub">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function SizeText({ items }) {
  return (
    <div className="pd-noteCard">
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

function ChipGroup({ items }) {
  return (
    <div className="pd-chipGroup">
      {items.map((item) => (
        <span key={item} className="pd-chip">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();

  const product = useMemo(
    () => PRODUCTS.find((item) => item.id === id) || null,
    [id]
  );

  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (product?.gallery?.length) {
      setActiveImage(product.gallery[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <section className="pd-page">
        <div className="pd-inner">
          <p className="pd-notFound">Producto no encontrado.</p>
          <Link to="/productos" className="pd-backLink">
            ← Volver a productos
          </Link>
        </div>
      </section>
    );
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const currentIndex = Math.max(gallery.indexOf(activeImage), 0);

  const goPrev = () => {
    const prevIndex = currentIndex <= 0 ? gallery.length - 1 : currentIndex - 1;
    setActiveImage(gallery[prevIndex]);
  };

  const goNext = () => {
    const nextIndex = currentIndex >= gallery.length - 1 ? 0 : currentIndex + 1;
    setActiveImage(gallery[nextIndex]);
  };

  return (
    <section className="pd-page">
      <div className="pd-inner">
        <div className="pd-topbar">
          <Link to="/productos" className="pd-backLink">
            ← Volver a productos
          </Link>
        </div>

        <div className="pd-layout">
          <div className="pd-gallery">
            <div className="pd-thumbs">
              {gallery.map((src, index) => (
                <button
                  key={`${product.id}-thumb-${index}`}
                  type="button"
                  className={`pd-thumb ${activeImage === src ? "is-active" : ""}`}
                  onClick={() => setActiveImage(src)}
                >
                  <img
                    src={src}
                    alt={`${product.title} vista ${index + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            <div className="pd-hero">
              <img src={activeImage} alt={product.title} />

              <div className="pd-nav">
                <button
                  type="button"
                  className="pd-navBtn"
                  onClick={goPrev}
                  aria-label="Imagen anterior"
                >
                  <span className="pd-navLeft" />
                </button>
                <button
                  type="button"
                  className="pd-navBtn"
                  onClick={goNext}
                  aria-label="Imagen siguiente"
                >
                  <span className="pd-navRight" />
                </button>
              </div>
            </div>
          </div>

          <aside className="pd-info">
            <div className="pd-kicker">Producto</div>
            <h1 className="pd-title">{product.title}</h1>
            {product.subtitle ? (
              <p className="pd-subtitle">{product.subtitle}</p>
            ) : null}

            {product.applications?.length > 0 && (
              <section className="pd-block">
                <div className="pd-sectionHead">
                  <h2>Aplicaciones</h2>
                </div>
                <ChipGroup items={product.applications} />
              </section>
            )}

            <section className="pd-block">
              <div className="pd-sectionHead">
                <h2>Diseño</h2>
              </div>

              <ChipGroup items={product.design} />

              {product.extraDesignText && (
                <div className="pd-noteCard pd-noteCardSoft">
                  <p>{product.extraDesignText}</p>
                </div>
              )}
            </section>

            <section className="pd-block pd-sizeSection">
              <div className="pd-sizeHeader">
                <h2>{product.sizeSectionTitle || "Seleccioná medida"}</h2>
                <span className="pd-sizeGuide">
                  {product.sizeGuideLabel || "Guía"}
                </span>
              </div>

              {product.sizeGuideText && (
                <p className="pd-sizeIntro">{product.sizeGuideText}</p>
              )}

              {product.sizesType === "grid" ? (
                <SizeGrid items={product.sizesGrid} />
              ) : (
                <SizeText items={product.sizesText} />
              )}
            </section>

            <section className="pd-block">
              <div className="pd-sectionHead">
                <h2>Material</h2>
              </div>
              <ChipGroup items={product.materials} />
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
