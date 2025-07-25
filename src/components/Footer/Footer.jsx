import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3>
            Let’s Collaborate <br />
            ads<span>@</span>apagency.co
          </h3>

          <p className="secondary">
            From 12–16s short‑form ads to full creative direction — we partner
            with brands and agencies to make scroll‑stopping work. Reach out
            anytime.
          </p>

          <Link to="/contact" className="btn">
          Get in Touch
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Work</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/faq" className="footer-nav-item">
            <span>FAQ</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>AP</h1>
          <h1>Agency</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; AP Agency 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
