import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-logo">Lifestyle Blog</h3>

      <p className="footer-text">
        © {new Date().getFullYear()} Lifestyle Blog. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
