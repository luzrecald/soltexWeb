import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

const navItems = [
  { to: "/empresa", label: "Empresa" },
  { to: "/productos", label: "Productos" },
  { to: "/personalizacion", label: "Personalización" },
  { to: "/contacto", label: "Contacto" },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setOpen(false);

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
          <NavLink to="/" end className="hero-brand">
            SOLTEX
          </NavLink>

          {/* Desktop nav */}
          <nav className="hero-nav">
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

          {/* Mobile burger */}
          <button
            className={`hero-burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            <span />
            <span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`hero-mobile ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className="hero-mobile-link"
            >
              {item.label}
            </NavLink>
          ))}
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