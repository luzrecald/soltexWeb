import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./MainNav.css";

const navItems = [
  { label: "Empresa", to: "/", scrollId: "empresa" },
  { label: "Productos", to: "/productos" },
  { label: "Contacto", to: "/contacto" },
];

function scrollToSection(id, tries = 80, intervalMs = 60) {
  let count = 0;

  const tick = () => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    count += 1;
    if (count < tries) {
      window.setTimeout(tick, intervalMs);
    }
  };

  tick();
}

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    if (!id) return;

    scrollToSection(id);
  }, [location.pathname, location.hash]);

  const handleNavigation = (item) => {
    closeMenu();

    if (item.scrollId) {
      if (location.pathname === "/") {
        scrollToSection(item.scrollId);
        window.history.replaceState(null, "", `/#${item.scrollId}`);
        return;
      }

      navigate(`/#${item.scrollId}`);
      return;
    }

    if (location.pathname !== item.to) {
      navigate(item.to);
    }
  };

  return (
    <nav className="site-nav" aria-label="Navegación principal">
      <div className="site-nav__inner">
        <NavLink
          to="/"
          end
          className="site-nav__brand"
          onClick={closeMenu}
          aria-label="Ir a inicio"
        >
          <img
            src="/footer-logo.png"
            alt="Soltex"
            className="site-nav__logo"
            loading="eager"
            decoding="async"
          />
        </NavLink>

        <div className="site-nav__links">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="site-nav__link"
              onClick={() => handleNavigation(item)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={`site-nav__toggle ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="site-nav-mobile"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="site-nav-mobile"
        className={`site-nav__mobile ${isMenuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
      >
        <div className="site-nav__mobile-inner">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="site-nav__mobile-link"
              onClick={() => handleNavigation(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`site-nav__backdrop ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Cerrar menú"
        onClick={closeMenu}
      />
    </nav>
  );
}