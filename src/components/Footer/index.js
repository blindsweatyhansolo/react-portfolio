import React from "react";
import "./Footer.css";
const menuIcon = require('../../assets/images/icons/nav-icons/menu.png');

const Footer = () => {


  return (
    <footer className="footer fixed-bottom d-flex justify-content-between">
      <div>
        <img src={menuIcon} className="menuIcon" alt=""/>
      </div>
      <div className="">
        <a href="https://github.com/blindsweatyhansolo" target="_blank" rel="noreferrer">
          <i className="bi bi-github mx-2"></i>
        </a>

        <a href="https://www.linkedin.com/in/jack-semidey-774313222/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin mx-2"></i>
        </a>
        <div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;