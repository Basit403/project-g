import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <div className="logo">MyBlog</div>

        {/* Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        {/* Auth buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/signup" className="btn signup-btn">Sign Up</Link>
        </div>

        {/* Mobile menu */}
        <div className="menu" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
