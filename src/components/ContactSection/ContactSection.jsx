import { useMemo, useState } from "react";
import "./ContactSection.css";

export default function ContactSection() {
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const contact = useMemo(
    () => ({
      whatsappLabel: "+595 981 948 566",
      whatsappDigits: "595981948566",
      email: "soltexventas@gmail.com",
    }),
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const subject = (fd.get("subject") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    // Demo minimal: abre el cliente de correo con mailto (sin backend)
    const mailSubject = encodeURIComponent(subject || "Consulta desde la web");
    const mailBody = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
    );

    if (!message) {
      setStatus({ type: "error", msg: "Escribe un mensaje para poder enviar." });
      return;
    }

    setStatus({ type: "ok", msg: "Abriendo tu correo para enviar el mensaje…" });
    window.location.href = `mailto:${contact.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section className="ct-section" id="contacto" aria-labelledby="ct-title">
      <div className="ct-inner">
        <header className="ct-header">
          <h2 className="ct-title" id="ct-title">
            Contacto
          </h2>
          <p className="ct-lead">
            Escribinos y respondemos lo antes posible. También podés contactarnos directo por WhatsApp o email.
          </p>
        </header>

        <div className="ct-card" role="region" aria-label="Formulario de contacto">
          <div className="ct-cardOverlay" aria-hidden="true" />

          <div className="ct-cardGrid">
            <form className="ct-form" onSubmit={onSubmit}>
              <div className="ct-field">
                <label htmlFor="ct-name">Nombre</label>
                <input id="ct-name" name="name" type="text" autoComplete="name" />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-email">Email</label>
                <input id="ct-email" name="email" type="email" autoComplete="email" />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-phone">Teléfono</label>
                <input id="ct-phone" name="phone" type="tel" autoComplete="tel" />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-subject">Asunto</label>
                <input id="ct-subject" name="subject" type="text" />
              </div>

              <div className="ct-field ct-field--message">
                <label htmlFor="ct-message">Mensaje</label>
                <textarea id="ct-message" name="message" rows={4} required />
              </div>

              <div className="ct-actions">
                <button className="ct-btn" type="submit">
                  Enviar
                </button>

                {status.type !== "idle" && (
                  <p
                    className={`ct-status ${status.type === "error" ? "is-error" : "is-ok"}`}
                    role={status.type === "error" ? "alert" : "status"}
                  >
                    {status.msg}
                  </p>
                )}
              </div>
            </form>

            <aside className="ct-aside" aria-label="Información de contacto">
              <div className="ct-asideBlock">
                <h3>WhatsApp</h3>
                <a
                  className="ct-link"
                  href={`https://wa.me/${contact.whatsappDigits}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.whatsappLabel}
                </a>
                <p className="ct-muted">Atención comercial / ventas</p>
              </div>

              <div className="ct-asideBlock">
                <h3>Email</h3>
                <a className="ct-link" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
                <p className="ct-muted">Envíanos tu consulta o requerimiento</p>
              </div>

              <div className="ct-asideHint" aria-hidden="true">
                <span />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}