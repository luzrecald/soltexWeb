import { useMemo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactSection.css";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("TU_FORM_ID_AQUI");

  const contact = useMemo(
    () => ({
      whatsappLabel: "+595 981 948 566",
      whatsappDigits: "595981948566",
      email: "soltexventas@gmail.com",
    }),
    []
  );

  return (
    <section className="ct-section" id="contacto" aria-labelledby="ct-title">
      <div className="ct-inner">
        <header className="ct-header">
          <h2 className="ct-title" id="ct-title">
            Contacto
          </h2>

          <p className="ct-lead">
            Escribinos y respondemos lo antes posible. También podés contactarnos
            directo por WhatsApp o email.
          </p>
        </header>

        <div className="ct-card" role="region" aria-label="Formulario de contacto">
          <div className="ct-cardOverlay" aria-hidden="true" />

          <div className="ct-cardGrid">
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-field">
                <label htmlFor="ct-name">Nombre</label>
                <input
                  id="ct-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-email">Email</label>
                <input
                  id="ct-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="ct-status is-error"
                />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-phone">Teléfono</label>
                <input
                  id="ct-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-subject">Asunto</label>
                <input
                  id="ct-subject"
                  name="subject"
                  type="text"
                />
              </div>

              <div className="ct-field ct-field--message">
                <label htmlFor="ct-message">Mensaje</label>
                <textarea
                  id="ct-message"
                  name="message"
                  rows={4}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="ct-status is-error"
                />
              </div>

              <div className="ct-actions">
                <button
                  className="ct-btn"
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Enviando..." : "Enviar"}
                </button>

                {state.succeeded && (
                  <p className="ct-status is-ok" role="status">
                    Mensaje enviado correctamente. Te responderemos lo antes posible.
                  </p>
                )}

                {!state.succeeded && state.errors && state.errors.length > 0 && (
                  <p className="ct-status is-error" role="alert">
                    No pudimos enviar tu mensaje. Intenta nuevamente o contáctanos por WhatsApp o email.
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