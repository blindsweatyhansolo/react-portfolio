import React, { useState } from 'react';
import validator from 'validator';
import Typewriter from 'typewriter-effect';
import "./style.css";
const githubLogo = require('../../assets/images/icons/socials/github.png');
const linkedInLogo = require('../../assets/images/icons/socials/linkedin.png');
const mailIcon = require('../../assets/images/icons/nav-icons/mail-96.png');

function Contact() {
  // error handling for form fields
  const [errorMessage, setErrorMessage] = useState('');

  const [hidden, setHiddenState] = useState(true);
  
  // create state variables to handle form fields, set to empty string
  const [formState, setFormState] = useState(
    { name: '', email: '', message: '' }
    );
  const { name, email, message } = formState;
  
  // setFormState updates the formState value for key property, assigned with e.target.value
  function handleInputChange(e) {
    if (e.target.name === 'email') {
      const isValid = validator.isEmail(e.target.value);
      // console.log(isValid);
     
      if(!isValid) {
        setErrorMessage('Your email is invalid!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.name === 'name') {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage('');
      }
    }

    setFormState({ ...formState, [e.target.name]: e.target.value });

    // console.log('errorMessage', errorMessage);

    // formState will only change if all form data has passed validations (no error message)
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  // function to handle form submit
  const handleFormSubmit =(e) => {
    e.preventDefault();

    if (!email || !name) {
      setErrorMessage('Please enter a valid email address and/or name!');
      return;
    }
    
    if (!message) {
      setErrorMessage('Please enter a message!');
      return;
    }

    if (e.target.name === 'email') {
      const validEmail = validator.isEmail(e.target.value);

      if (!validEmail) {
        setErrorMessage('Please enter a valid email!');
        return;
      } else {
        setErrorMessage('');
      }
    }

    // console.log(name, email, message); 
    const subLine = 'Hello, Jack!';
    const mailTo = `mailto:mtsemidey@gmail.com?subject=${subLine}&body=${message}`;

    if ((name, email, message)) {
      window.open(mailTo, "email");
    }
  };

  return (
    <div className="container">
      
      <section className="contact d-flex justify-content-center">
        <div className="mt-5 mb-2 dosContainer text-light col-12 col-lg-6 shadow">
          <div className='px-1 d-flex justify-content-between'>
            <div>
              <i className="bi bi-terminal"></i> JSEM64:/c/Users/Jack
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

            <p>$ Interested in contacting me? Check out more of my work on GitHub, reach out via LinkedIn, or fill out the form below!</p>
            
            <section className="socials d-flex justify-content-center">
              <div className="github">
                <a 
                  href="https://github.com/blindsweatyhansolo" 
                  target="_blank" 
                  rel='noreferrer' 
                  title="blindsweatyhansolo">
                  <img src={githubLogo} alt="Github Logo" className="socialIcon"/>
                </a>
              </div>
              <div className="linkedin">
                <a 
                  href="https://www.linkedin.com/in/jack-semidey-774313222/" 
                  target="_blank" 
                  rel="noreferrer" 
                  title="Jack Semidey">
                  <img src={linkedInLogo} alt="LinkedIn Logo" className="socialIcon"/>
                </a>
              </div>
            </section>
            
            <p>$ <span className="typeText">
              <Typewriter
                 onInit={(typewriter) => {
                  typewriter
                    .typeString("open contactForm.js")
                    .pauseFor(1500)
                    .callFunction(() => {
                      setHiddenState(false);
                    })
                    .start();
                  }}
              />
              </span></p>
          </div>
        </div>
      </section>
  
    {hidden ? ("") : (
      <section className="d-flex justify-content-center mt-2">
        <div className="window text-light col-lg-8 col-12 shadow">
          
          <div className="windowBar px-1 d-flex justify-content-between">
            <div>
              <i className="bi bi-envelope"></i> contactForm.js
            </div>
            <div className="px-1">
                <span className="mx-1"><i className="bi bi-dash"></i></span>
                <span className="mx-1"><i className="bi bi-square"></i></span>
                <span className="mx-1"><i className="bi bi-x-square"></i></span>
            </div>
          </div>


          <div className="contact-form container">
            <div className="d-flex justify-content-evenly pt-2">
              <div className="col-12 col-sm-10 col-lg-10">
                <p className="fs-4 text-center">I would love to hear from you!</p>
                <span className="text-muted"><em>Developer note: </em>This portfolio is currently front end only, meaning this form will open your machine's mail client.
                If you would like to contact me another way, please reach out on GitHub or LinkedIn with the links above.</span>
              </div>
            </div>

            <form>
              <div className="form-group p-2">
                <label className="" htmlFor="fname">Name:</label>       
                <input 
                type="text" 
                className="form-control" 
                placeholder="Enter Name" 
                name="name"
                onBlur={handleInputChange}
                defaultValue={name}
                  />
              </div>
              <div className="form-group p-2">
                <label className="" htmlFor="email">Email:</label>
                <input 
                  defaultValue={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Enter Email"
                  className='form-control'
                />
              </div>
              <div className="form-group p-2">
                <label className="control-label col-sm-2" htmlFor="message">Message:</label>
                <textarea 
                  defaultValue={message}
                  name="message"
                  onChange={handleInputChange}
                  type="text"
                  rows="5"
                  placeholder='Your Message'
                  className='form-control'
                />
              </div>

              {errorMessage && (
                <div>
                  <p className='error-text text-danger'>{errorMessage}</p>
                </div>
              )}

              <div className="d-flex justify-content-center mx-2">
                <button type="submit" className="btn btn-primary col-8 mb-1" onClick={handleFormSubmit}>
                  <i className='bi bi-send'></i> Send!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )}
    </div>
  );
};

export default Contact;