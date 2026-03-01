import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  // ✅ Dirección y link a Google Maps
  const address =
    "General Genes entre Julia M. Cueto y Mcal Estigarribia, San Lorenzo 0000, Paraguay";

  // Link estable a Google Maps (query)
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <footer className="ft" aria-label="Footer">
      <div className="ft-inner">
        <div className="ft-grid">
          {/* Brand */}
          <div className="ft-col ft-brand">
            <img className="ft-logo" src="/footer-logo.png" alt="Soltex" loading="lazy" />
            <p className="ft-tagline">
              Componentes tejidos a medida. Precisión, consistencia y producción confiable desde 2011.
            </p>

            <div className="ft-social">
              <p className="ft-kicker">Seguinos en nuestras redes</p>

              <div className="ft-socialRow">
                {/* ✅ Reemplazá href por tus links reales */}
                <a
                  className="ft-pill ft-pillIcon"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  {/* Instagram */}
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zm0 6.2A2.4 2.4 0 1114.4 12 2.4 2.4 0 0112 14.4zM17.8 6.2a.9.9 0 11-.9.9.9.9 0 01.9-.9z" />
                  </svg>
                </a>

                <a
                  className="ft-pill ft-pillIcon"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  {/* Facebook */}
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H16.7V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h2.7v8h3.8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="ft-col">
            <p className="ft-kicker">Contacto</p>

            <div className="ft-block">
              <p className="ft-label">WhatsApp</p>
              <a className="ft-link" href="https://wa.me/595981948566" target="_blank" rel="noreferrer">
                +595 981 948 566
              </a>
              <p className="ft-muted">Atención comercial / ventas</p>
            </div>

            <div className="ft-block">
              <p className="ft-label">Email</p>
              <a className="ft-link" href="mailto:soltexventas@gmail.com">
                soltexventas@gmail.com
              </a>
              <p className="ft-muted">Envíanos tu consulta o requerimiento</p>
            </div>

            <div className="ft-block">
              <p className="ft-label">Horario</p>
              <p className="ft-text">
                Lunes – Viernes <br />
                08:00 – 17:00
              </p>
            </div>
          </div>

          {/* Location / Nav */}
          <div className="ft-col">
            <p className="ft-kicker">Ubicación</p>

            <div className="ft-block">
              <p className="ft-label">Dirección</p>

              {/* ✅ Click → Google Maps */}
              <a className="ft-link" href={mapsHref} target="_blank" rel="noreferrer">
                {address}
              </a>

              <p className="ft-muted">San Lorenzo, Paraguay</p>
            </div>

            <div className="ft-block">
              <p className="ft-kicker">Navegación</p>
              <div className="ft-links">
                <a className="ft-link" href="/#empresa">Empresa</a>
                <a className="ft-link" href="/productos">Productos</a>
                <a className="ft-link" href="/personalizacion">Personalización</a>
                <a className="ft-link" href="/contacto">Contacto</a>
              </div>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <p className="ft-copy">© {year} SOLTEX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}