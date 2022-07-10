import React from "react";
import "./Footer.css";
const menuIcon = require('../../assets/images/icons/nav-icons/menu.png');

const Footer = () => {


  return (
    <footer className="footer fixed-bottom d-flex justify-content-between">
      <div>
        <a href="https://github.com/blindsweatyhansolo/react-portfolio" target="_blank" rel="noreferrer" title="Check out the repo for this portfolio">
          <img src={menuIcon} className="menuIcon" alt=""/>
        </a>
      </div>
      <div>
        <p className="footerText">J. Semidey | 2022</p>
      </div>
      <div className="">
        <a href="https://github.com/blindsweatyhansolo" target="_blank" rel="noreferrer">
          <i className="bi bi-github mx-2"></i>
        </a>

        <a href="https://www.linkedin.com/in/jack-semidey-774313222/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin mx-2"></i>
        </a>

        <a href="https://stackoverflow.com/users/18377072/jack-semidey" target="_blank" rel="noreferrer">
          <i className="bi bi-stack-overflow mx-2"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;