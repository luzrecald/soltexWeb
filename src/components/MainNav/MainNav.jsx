import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.css";

const navItems = [
  { to: "/empresa", label: "Empresa" },
  { to: "/productos", label: "Productos" },
  { to: "/personalizacion", label: "Personalización" },
  { to: "/contacto", label: "Contacto" },
];

export default function MainNav() {
  const [open, setOpen] = useState(false);

  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Cerrar al cambiar a desktop (evita que quede abierto)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="mainnav" aria-label="Navegación principal">
      <div className="mainnav-inner">
        <NavLink to="/" end className="mainnav-brand" onClick={closeMenu}>
          SOLTEX
        </NavLink>

        {/* Desktop links */}
        <div className="mainnav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "mainnav-link active" : "mainnav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`mainnav-burger ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mainnav-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer (FH clean) */}
      <div
        id="mainnav-mobile"
        className={`mainnav-mobile ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
      >
        <div className="mainnav-mobileInner">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "mainnav-mobileLink active" : "mainnav-mobileLink"
              }
            >
              {item.label}
              <span className="mainnav-mobileChevron" aria-hidden="true" />
            </NavLink>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      <button
        type="button"
        className={`mainnav-backdrop ${open ? "is-open" : ""}`}
        aria-label="Cerrar menú"
        onClick={closeMenu}
      />
    </nav>
  );
}