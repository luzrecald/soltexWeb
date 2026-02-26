import { NavLink } from "react-router-dom";
import "./Hero.css";

const navItems = [
  { to: "/empresa", label: "Empresa" },
  { to: "/productos", label: "Productos" },
  { to: "/personalizacion", label: "Personalización" },
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

      <div className="hero-header">
        <div className="hero-header-inner">
          <NavLink to="/" end className="hero-brand" aria-label="Ir al inicio">
            SOLTEX
          </NavLink>

          <nav className="hero-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
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

      <div className="hero-content">
        <div className="hero-content-inner">
          <h1 className="hero-title">SOLTEX</h1>

          <p className="hero-subtitle">
            Fabricación de cuellos y pretinas tejidos personalizados para clientes que exigen
            calidad e identidad.
          </p>

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