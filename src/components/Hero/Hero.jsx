import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="hero" aria-label="Presentación Soltex">
      <video
        ref={videoRef}
        className="hero-video"
        src="/hero-maquina.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      />

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-content-inner">
          <p className="hero-eyebrow">
            Cuellos y pretinas tejidos a medida
          </p>

          <h1 className="hero-title">SOLTEX</h1>

          <div className="hero-buttons">
            <NavLink className="hero-btn hero-btn-primary" to="/contacto">
              Solicitar cotización
            </NavLink>

            <NavLink className="hero-btn hero-btn-secondary" to="/productos">
              Ver productos
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}