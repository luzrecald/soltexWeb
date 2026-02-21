import "./Gallery.css"

const ITEMS = [
  { src: "/img1.png", label: "Vos los imaginas, Soltex los crea" },
  { src: "/img2.png", label: "Tejidos de primera calidad" },
  { src: "/img3.jpeg", label: "Acabado fino" },
  { src: "/img4.png", label: "El toque especial que necesitan tus prendas" },
]

const Gallery = () => {
  return (
    <section className="gallery" id="galeria">
      <div className="gallery-inner">
        <div className="gallery-grid">

          {ITEMS.map((item, i) => (
            <div className="gallery-item" key={i}>
              <div className="gallery-media">
                <img src={item.src} alt={item.label} loading="lazy" />
              </div>

              <p className="gallery-label">{item.label}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Gallery