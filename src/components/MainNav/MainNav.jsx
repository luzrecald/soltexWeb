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

function scrollToIdWithRetry(id, tries = 60, intervalMs = 50) {
  let count = 0;
  const tick = () => {
    if (scrollToId(id)) return;
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

  const setSectionHashOnly = (id) => {
    // ✅ en HashRouter NO navegues a "/#id"
    // solo cambiá el hash "de sección"
    window.location.hash = `#${id}`;
  };

  const onGoToSection = (id) => {
    closeMenu();

    // Si no estás en home, navegá a "/" primero
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // cuando home monte, ponemos el hash de sección y scrolleamos con retry
      requestAnimationFrame(() => {
        setSectionHashOnly(id);
        scrollToIdWithRetry(id);
      });
      return;
    }

    setSectionHashOnly(id);
    requestAnimationFrame(() => scrollToIdWithRetry(id));
  };

  // Si entrás con hash (#productos) scrollea
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = (window.location.hash || "").replace("#", "").trim();
    if (!hash) return;

    requestAnimationFrame(() => scrollToIdWithRetry(hash));
  }, [location.pathname]);

  return (
    <nav className="mainnav" aria-label="Navegación principal">
      <div className="mainnav-inner">
        <NavLink to="/" end className="mainnav-brand" onClick={closeMenu}>
          SOLTEX
        </NavLink>

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

      <button
        type="button"
        className={`mainnav-backdrop ${open ? "is-open" : ""}`}
        aria-label="Cerrar menú"
        onClick={closeMenu}
      />
    </nav>
  );
}