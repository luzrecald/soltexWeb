import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./MainNav.css";

const navItems = [
  { label: "Empresa", to: "/", scrollId: "empresa" },
  { label: "Productos", to: "/productos" },
  { label: "Personalización", to: "/personalizacion" },
  { label: "Contacto", to: "/contacto" },
];

function scrollToIdWithRetry(id, tries = 60, intervalMs = 50) {
  let count = 0;

  const tick = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
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

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onNav = (item) => {
    closeMenu();

    if (item.scrollId) {
      if (location.pathname === "/") {
        requestAnimationFrame(() => scrollToIdWithRetry(item.scrollId));
        return;
      }
      navigate("/", { replace: false });
      requestAnimationFrame(() => scrollToIdWithRetry(item.scrollId));
      return;
    }

    if (location.pathname !== item.to) {
      navigate(item.to, { replace: false });
    }
  };

  return (
    <nav className="mainnav" aria-label="Navegación principal">
      <div className="mainnav-inner">
        {/* ✅ Brand con LOGO (public/footer-logo.png) */}
        <NavLink to="/" end className="mainnav-brand" onClick={closeMenu} aria-label="Ir a inicio">
          <img
            src="/footer-logo.png"
            alt="Soltex"
            className="mainnav-logo"
            loading="eager"
            decoding="async"
          />
        </NavLink>

        {/* Desktop */}
        <div className="mainnav-links">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="mainnav-link"
              onClick={() => onNav(item)}
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
              key={item.label}
              type="button"
              className="mainnav-mobileLink"
              onClick={() => onNav(item)}
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