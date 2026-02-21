import { NavLink } from "react-router-dom";
import "./Hero.css";

const navItems = [
  { to: "/productos", label: "Productos" },
  { to: "/personalizacion", label: "Personalización" },
  { to: "/galeria", label: "Galería" },
  { to: "/empresa", label: "Empresa" },
  { to: "/contacto", label: "Contacto" },
];

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/hero-maquina.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay" />

      {/* HEADER dentro del hero */}
      <div className="hero-header">
        <div className="hero-header-inner">
          {/* ✅ SOLTEX como link para tener hover igual */}
          <NavLink to="/" end className="hero-brand">
           
          </NavLink>

          <nav className="hero-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "hero-nav-link active" : "hero-nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenido (esto ya lo tenías) */}
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1 className="hero-title">SOLTEX</h1>

          <p className="hero-subtitle">
            Fabricación de cuellos y pretinas tejidos personalizados para clientes
            que exigen calidad e identidad.
          </p>

          <div className="hero-buttons">
            <a className="hero-btn hero-btn-primary" href="/contacto">
              Solicitar cotización
            </a>
            <a className="hero-btn hero-btn-secondary" href="/productos">
              Ver productos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}