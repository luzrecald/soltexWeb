// Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const navItems = [
    { to: "/productos", label: "Productos" },
    { to: "/personalizacion", label: "Personalización" },
    { to: "/empresa", label: "Empresa" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">

        {/* Marca */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo" aria-label="Ir al inicio">
            <img src="/footer-logo.png" alt="Soltex" />
          </Link>

          <p className="footer-tagline">
            Componentes tejidos a medida. Precisión, consistencia y producción confiable desde 2011.
          </p>

          {/* Redes */}
          <div className="footer-social">
            <p className="footer-social-title">Seguinos en nuestras redes</p>

            <div className="footer-social-icons">
              <a
                className="footer-social-icon ig"
                href="https://www.instagram.com/soltexpy/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.75-.9a1.15 1.15 0 1 1 0 2.3a1.15 1.15 0 0 1 0-2.3Z" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                className="footer-social-icon fb"
                href="https://www.facebook.com/soltexpy/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.5-.1-2.9-.1c-2.9 0-4.9 1.8-4.9 5.1V11H6.5v3H9v8h4.5Z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="footer-col">
          <h4 className="footer-title">Secciones</h4>

          <nav className="footer-nav">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contacto */}
        <div className="footer-col">
          <h4 className="footer-title">Contacto</h4>

          <div className="footer-contact">
            <p>
              <span className="footer-label">Ubicación</span>
              <a
                className="footer-value"
                href="https://www.google.com/maps/search/?api=1&query=General+Genes+entre+Julia+M.+Cueto+y+Mcal+Estigarribia,+San+Lorenzo,+Paraguay"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Genes entre Julia M. Cueto y Mcal Estigarribia,
                San Lorenzo, Paraguay
              </a>
            </p>

            <p>
              <span className="footer-label">Email</span>
              <a className="footer-value" href="mailto:soltexventas@gmail.com">
                soltexventas@gmail.com
              </a>
            </p>

            <p>
              <span className="footer-label">Teléfono</span>
              <a className="footer-value" href="tel:+59581948566">
                +595 819 48566
              </a>
            </p>

            <Link className="footer-cta" to="/contacto">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Soltex. Todos los derechos reservados.</p>
        <p className="footer-note">
          Proveedor B2B · Cuellos y pretinas tejidos personalizados
        </p>
      </div>
    </footer>
  );
}