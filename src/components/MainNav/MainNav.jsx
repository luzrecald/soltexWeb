import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./MainNav.css";

const navItems = [
  { id: "empresa", label: "Empresa" },
  { id: "productos", label: "Productos" },
  { id: "personalizacion", label: "Personalización" },
  { id: "contacto", label: "Contacto" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  // Si usás scroll-margin-top en CSS, con esto basta:
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function MainNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const onGoToSection = async (id) => {
    closeMenu();

    // Si NO estás en home, primero navega al home y luego scrollea
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      // Espera a que React renderice la home (micro delay)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToId(id));
      });
      return;
    }

    scrollToId(id);
  };

  return (
    <nav className="mainnav" aria-label="Navegación principal">
      <div className="mainnav-inner">
        {/* Brand: siempre vuelve a Home */}
        <NavLink to="/" end className="mainnav-brand" onClick={closeMenu}>
          SOLTEX
        </NavLink>

        {/* Desktop links (scroll a secciones) */}
        <div className="mainnav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="mainnav-link"
              onClick={() => onGoToSection(item.id)}
            >
              {item.label}
            </button>
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

      {/* Mobile drawer */}
      <div
        id="mainnav-mobile"
        className={`mainnav-mobile ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
      >
        <div className="mainnav-mobileInner">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="mainnav-mobileLink"
              onClick={() => onGoToSection(item.id)}
            >
              {item.label}
              <span className="mainnav-mobileChevron" aria-hidden="true" />
            </button>
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