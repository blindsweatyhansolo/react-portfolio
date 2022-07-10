import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import "./style.css";

function Home() {

  const [hidden, setHiddenState] = useState(true);

  return (
    <div className="container d-flex justify-content-center">

      <div className='my-2 dosContainer text-light col-12 col-lg-6 shadow-lg'>

        <div className='px-1 text-light d-flex justify-content-between'>
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

          {/* <p>$ Hello World! My name is <strong>Jack</strong></p> */}
          <p>$ <span className='typeText'>
            <Typewriter 
              onInit={(typewriter) => {
                typewriter
                  .typeString("npm start")
                  .pauseFor(1500)
                  .callFunction(() => {
                    setHiddenState(false);
                  })
                  .start();
              }}  
            />
            </span>
          </p>
          {hidden ? (
            ""
          ) : (
            <div className='hero text-center'>
              ================<br />
              Hello World! <br />
              ================ <br />
              <p>
                Thanks for checking out my portfolio!<br/>
                My name is Jack, and I'm a Full Stack Web Developer.<br/>
                Click around to see more.
              </p>
            </div>
          )}
        </div>

      </div> 

    </div>
  );
};

export default Home