import { useEffect, useRef } from "react";
import "./Gallery.css";

const ITEMS = [
  { src: "/img1.png", label: "Vos los imaginas, Soltex los fabrica" },
  { src: "/img2.png", label: "Tejidos de primera calidad" },
  { src: "/img3.jpeg", label: "Acabado fino" },
  { src: "/img4.png", label: "El toque especial que necesitan tus prendas" },
];

const Gallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = Array.from(root.querySelectorAll(".gallery-item"));
    if (items.length === 0) return;

    if (prefersReduced) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery" id="galeria" ref={sectionRef}>
      <div className="gallery-inner">
        <div className="gallery-grid">
          {ITEMS.map((item, i) => (
            <div
              className="gallery-item"
              key={i}
              style={{ "--d": `${i * 120}ms` }}
            >
              <div className="gallery-media">
                <img src={item.src} alt={item.label} loading="lazy" />
              </div>

              <p className="gallery-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;