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
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

// Espera a que exista el elemento (por si estás navegando a "/")
function scrollToIdWithRetry(id, tries = 60, intervalMs = 50) {
  let count = 0;

  const tick = () => {
    const ok = scrollToId(id);
    if (ok) return;

    count += 1;
    if (count >= tries) return;

    window.setTimeout(tick, intervalMs);
  };

  tick();
}

export default function MainNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Cerrar al pasar a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // CLICK: solo setea el hash y cierra el menú
  const onGoToSection = (id) => {
    closeMenu();
    navigate(`/#${id}`, { replace: false });
  };

  // El scroll SIEMPRE ocurre desde acá cuando cambia el hash
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = (location.hash || "").replace("#", "").trim();
    if (!hash) return;

    // 1 frame para que se cierre el drawer y se estabilice el layout (clave en iOS)
    requestAnimationFrame(() => scrollToIdWithRetry(hash));
  }, [location.pathname, location.hash]);

  return (
    <nav className="mainnav" aria-label="Navegación principal">
      <div className="mainnav-inner">
        <NavLink
          to="/"
          end
          className="mainnav-brand"
          onClick={closeMenu}
          aria-label="Ir al inicio"
        >
          SOLTEX
        </NavLink>

        {/* Desktop */}
        <div className="mainnav-links" aria-label="Secciones">
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

        {/* Mobile burger */}
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