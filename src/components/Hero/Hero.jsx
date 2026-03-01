import "./Hero.css";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" aria-label="Presentación Soltex">
      <video
        className="hero-video"
        src="/hero-maquina.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ✅ overlay sobrio (suaviza video) */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* ✅ contenido simple y editorial */}
      <div className="hero-content">
        <div className="hero-content-inner">
          <p className="hero-eyebrow">Cuellos y pretinas tejidos a medida</p>

          <h1 className="hero-title">SOLTEX</h1>

          
          <div className="hero-buttons">
            <NavLink className="hero-btn hero-btn-primary" to="/contacto">
              Solicitar cotización
            </NavLink>
            <NavLink className="hero-btn hero-btn-secondary" to="/productos">
              Ver productos
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}