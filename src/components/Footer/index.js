import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer fixed-bottom">
      <div className="d-flex justify-content-center align-items-center">
        <a href="https://github.com/blindsweatyhansolo" target="_blank" rel="noreferrer">
          GITHUB
        </a>

        <a href="https://www.linkedin.com/in/jack-semidey-774313222/" target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
      </div>
    </div>
  );
}

export default Footer;