import React from "react";
import "./Footer.css";
const repoIcon = require('../../assets/images/icons/nav-icons/repo.png');
const githubLogo = require('../../assets/images/icons/socials/github.png');
const linkedInLogo = require('../../assets/images/icons/socials/linkedin.png');
const twitterLogo = require('../../assets/images/icons/socials/twitter.png');

const Footer = () => {


  return (
    <footer className="footer fixed-bottom d-flex justify-content-between pt-1">
      <div>
        <a href="https://github.com/blindsweatyhansolo/react-portfolio" target="_blank" rel="noreferrer" title="Check out the repo for this portfolio">
          <img src={repoIcon} className="footerIcon" alt=""/>
        </a>
      </div>
      <div>
        <p className="footerText">J. Semidey | 2022</p>
      </div>
      <div className="">
        <a href="https://github.com/blindsweatyhansolo" target="_blank" rel="noreferrer">
          {/* <i className="bi bi-github mx-2"></i> */}
          <img src={githubLogo} className="footerIcon" alt=""/>
        </a>

        <a href="https://www.linkedin.com/in/jack-semidey-774313222/" target="_blank" rel="noreferrer">
          <img src={linkedInLogo} className="footerIcon" alt=""/>
        </a>

        <a href="https://twitter.com/jackaaattack" target="_blank" rel="noreferrer">
          <img src={twitterLogo} className="footerIcon" alt=""/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;