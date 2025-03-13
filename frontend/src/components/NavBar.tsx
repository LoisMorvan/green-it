import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">GreenIT</div>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/green-it-policy" onClick={() => setMenuOpen(false)}>
            Green IT Policy
          </Link>
        </li>
        <li>
          <Link to="/gestion-images" onClick={() => setMenuOpen(false)}>
            Gestion Images
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
