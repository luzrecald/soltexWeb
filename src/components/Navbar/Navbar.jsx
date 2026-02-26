import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="top-header">
      <div className="top-header-content">
        <div className="top-header-badge">
          <img src="/paraguay-flag.png" alt="Paraguay" />
          <span>Mano de obra 100% paraguaya</span>
        </div>

        <div className="top-header-right">
          <span className="top-header-location">San Lorenzo, Paraguay</span>
          <span className="top-header-sep">|</span>
          <a className="top-header-link" href="mailto:soltexventas@gmail.com">
            soltexventas@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}