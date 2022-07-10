import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import "./style.css";
const javascriptIcon = require('../../assets/images/icons/skills/javascript96.png');
const htmlIcon = require('../../assets/images/icons/skills/html596.png');
const cssIcon = require('../../assets/images/icons/skills/css396.png');
const mongoIcon = require('../../assets/images/icons/skills/mongo96.png');
const nodeIcon = require('../../assets/images/icons/skills/node96.png');
const reactIcon = require('../../assets/images/icons/skills/react96.png');
const gitIcon = require('../../assets/images/icons/skills/git96.png');


function About() {
  const [hidden, setHiddenState] = useState(true);

  return (
    <div className="container">

        <section className="about d-flex justify-content-center">
          <div className="mt-5 mb-2 dosContainer text-light col-12 col-lg-6 shadow">
            <div className='dosBar px-1 d-flex justify-content-between'>
              <div>
                <i className="bi bi-terminal"></i> JSEM64:/c/Users/Jack/
              </div>
              <div className="px-1">
                <span className="mx-1"><i className="bi bi-dash"></i></span>
                <span className="mx-1"><i className="bi bi-square"></i></span>
                <span className="mx-1"><i className="bi bi-x-square"></i></span>
              </div>
            </div>

            <div className="dosContent p-1">
              <p className="dosUser">Jack <span className="dosUserDir">JSEM64</span>
              <span className="dosDir"> ~/JSPortfolio</span> 
              <span className="text-primary"> (main) </span></p>

              <p>$ <span className="typeText">
                <Typewriter 
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("npm start AboutJack.js")
                      .pauseFor(1500)
                      .callFunction(() => {
                        setHiddenState(false);
                      })
                      .start()
                  }}
                />
                </span></p>
              
              {hidden ? (
                ""
              ) : (
                <div className="hero">
                  ================<br />
                  Hi, I'm Jack! <br />
                  ================ <br />
                  <p>Coffee house supervisor turned Full Stack Web Developer.</p>
                  <p>Film geek, amateur wood-worker, Dungeons and Dragons nerd, and overall curious guy.
                    I like to build things on the web, and have a thirst for knowledge.
                    After attending college for Film Arts and working full-time as a supervisor for Starbucks, I decided to shift gears into the 
                    ever-enticing web development world. As a manager I've learned vital team skills, adapted quickly to working in fast-paced environments,
                    and to think outside the box. Based in the DMV area.
                  </p>
                  <p>= Skills =</p>
                  <div className='d-flex justify-space-between justify-content-center flex-wrap'>
                    <img src={javascriptIcon} alt="JS Logo"/>
                    <img src={htmlIcon} alt="HTML Logo"/>
                    <img src={cssIcon} alt="CSS Logo"/>
                    <img src={mongoIcon} alt="MongoDB Logo0"/>
                    <img src={reactIcon} alt="React Logo"/>
                    <img src={nodeIcon} alt="Node Logo"/>
                    <img src={gitIcon} alt="Git Logo"/>
                  </div>
                </div>
              )}

            </div>
          
          </div>
        </section>

      {hidden ? ("") : (
        <section className="profileImage col-12 d-flex justify-content-center">
          <div className="window text-light col-lg-8 col-12 shadow">
            
            <div className="windowBar py-1 d-flex justify-content-between">
              <div className="windowTitle px-2">
                <i className="bi bi-image"></i> jack_profilepic.jpg
              </div>
              <div className="px-1">
                <span className="mx-1"><i className="bi bi-dash"></i></span>
                <span className="mx-1"><i className="bi bi-square"></i></span>
                <span className="mx-1"><i className="bi bi-x-square"></i></span>
              </div>
            </div>

            <div className="windowContent bg-dark d-flex justify-content-center">
              <img src={require(`../../assets/images/jack_profilepic.jpg`)} className="imgProfile img-fluid" alt="Jack looking smug"/>
            </div>
          </div>
        </section>
      )}

    </div>

  );
}

export default About;