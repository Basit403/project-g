import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo">MyBlog</div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>

          <button className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>
      {open && (
          <div className="mobile-menu">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>

            <div className="mobile-auth">
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
          </div>
        )}  
    </header>
  );
}
