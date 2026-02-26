import { NavLink } from "react-router-dom";
import "./MainNav.css";

const navItems = [
  { to: "/empresa", label: "Empresa" },
  { to: "/productos", label: "Productos" },
  { to: "/personalizacion", label: "Personalización" },
  { to: "/contacto", label: "Contacto" },
];

export default function MainNav() {
  return (
    <nav className="mainnav" aria-label="Navegación principal">
      <div className="mainnav-inner">
        <NavLink to="/" end className="mainnav-brand">
          SOLTEX
        </NavLink>

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
      </div>
    </nav>
  );
}