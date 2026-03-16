import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const address =
    "General Genes entre Julia M. Cueto y Mcal Estigarribia, San Lorenzo, Paraguay";

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <footer className="ft" aria-label="Footer">
      <div className="ft-inner">

        <div className="ft-top">

          {/* BRAND */}
          <div className="ft-brand">
            <img
              className="ft-logo"
              src="/footer-logo.png"
              alt="Soltex"
              loading="lazy"
            />

            <p className="ft-tagline">
              Componentes tejidos a medida para marcas y fábricas que buscan
              precisión, consistencia y calidad.
            </p>

            <div className="ft-socialRow">

              {/* Instagram */}
              <a
                className="ft-socialIcon"
                href="https://www.instagram.com/soltexpy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zm0 6.2A2.4 2.4 0 1114.4 12 2.4 2.4 0 0112 14.4zM17.8 6.2a.9.9 0 11-.9.9.9.9 0 01.9-.9z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                className="ft-socialIcon"
                href="https://www.facebook.com/soltexpy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H16.7V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h2.7v8h3.8z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* CONTACTO */}
          <div className="ft-col">

            <p className="ft-heading">Contacto</p>

            <a
              className="ft-link"
              href="https://wa.me/595981948566"
              target="_blank"
              rel="noopener noreferrer"
            >
              +595 981 948 566
            </a>

            <a
              className="ft-link"
              href="mailto:soltexventas@gmail.com"
            >
              soltexventas@gmail.com
            </a>

          </div>

          {/* NAVEGACIÓN */}
          <div className="ft-col">

            <p className="ft-heading">Navegación</p>

            <a className="ft-link" href="/#empresa">Empresa</a>

            <a className="ft-link" href="/productos">Productos</a>

            <a className="ft-link" href="/#personalizacion">Personalización</a>

            <a className="ft-link" href="/contacto">Contacto</a>

          </div>

          {/* UBICACIÓN */}
          <div className="ft-col">

            <p className="ft-heading">Ubicación</p>

            <a
              className="ft-link ft-link--address"
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>

          </div>

        </div>

        <div className="ft-bottom">
          <p className="ft-copy">
            © {year} Soltex. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}