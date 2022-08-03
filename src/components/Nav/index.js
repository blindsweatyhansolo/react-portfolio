import React from "react";
import "./Nav.css";
const terminalIcon = require('../../assets/images/icons/nav-icons/console.png');
const aboutIcon = require('../../assets/images/icons/nav-icons/document.png');
const folderIcon = require('../../assets/images/icons/nav-icons/folder.png');
const emailIcon = require('../../assets/images/icons/nav-icons/mail.png');
const resumeIcon = require('../../assets/images/icons/nav-icons/pdf.png');

function Nav({ currentPage, handlePageChange }) {
  return (
  <ul className="nav navbar d-flex justify-content-around">
      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
          >
          <img src={terminalIcon} alt="" className="navIcon"/>
          <p className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</p>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
          >
            <img src={aboutIcon} alt="" className="navIcon"/>
            
          <p className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</p>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a
            href="#blog"
            onClick={() => handlePageChange('Projects')}
          >
            <img src={folderIcon} alt="" className="navIcon"/>
          <p className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</p>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
          >
            <img src={emailIcon} alt="" className="navIcon"/>
            <p className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</p>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a 
            href="https://drive.google.com/file/d/1cCGkrZqUzzfAjRuxCgsxX4HswyWI50vc/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="text-decoration-none">
            <img src={resumeIcon} alt="" className="navIcon"/>
            <p>Resume.pdf</p>
          </a>
        </div>
      </li>

    </ul>
  )
}

export default Nav;