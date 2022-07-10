import React from "react";
import "./Nav.css";
const terminalIcon = require('../../assets/images/icons/nav-icons/console.png');
const aboutIcon = require('../../assets/images/icons/nav-icons/document.png');
const folderIcon = require('../../assets/images/icons/nav-icons/folder.png');
const emailIcon = require('../../assets/images/icons/nav-icons/mail.png');
const resumeIcon = require('../../assets/images/icons/nav-icons/pdf.png');

function Nav({ currentPage, handlePageChange }) {
  return (
  <ul className="nav nav-tabs d-flex justify-content-around no-wrap">
      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
          <img src={terminalIcon} alt="" />
          <p>Home</p>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            <img src={aboutIcon} alt="" />
          <p>About</p>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a
            href="#blog"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            <img src={folderIcon} alt=""/>
          <p>Projects</p>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            <img src={emailIcon} alt=""/>
            <p>Contact</p>
          </a>
        </div>
      </li>

      <li className="nav-item">
        <div className="d-flex flex-column text-center">
          <a 
            href="https://drive.google.com/file/d/1ezNgD3oMGJNCJfbIR1ffJVobSfbkTePx/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="text-decoration-none">
            <img src={resumeIcon} alt="" />
            <p>Resume.pdf</p>
          </a>
        </div>
      </li>

    </ul>
  )
}

export default Nav;