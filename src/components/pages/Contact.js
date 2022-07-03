import React, { useState } from 'react';

function Contact() {

  // // create state variables to handle form fields, set to empty string
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // // error handling for form fields
  // const [error, setError] = useState('');


  return (
    <div className="container">
      <section className="contact">
        <div className="mt-5 mb-2 dosContainer border border-secondary bg-secondary text-light col-12 shadow">
          <div className='dosBar px-1 d-flex justify-content-between'>
            <div>
              <i class="bi bi-terminal"></i> JSEM64:/c/Users/Jack/JSPortfolio/Contact.js
            </div>
            <div className="px-1">
              <span className="mx-1"><i class="bi bi-dash"></i></span>
              <span className="mx-1"><i class="bi bi-square"></i></span>
              <span className="mx-1"><i class="bi bi-x-square"></i></span>
            </div>
          </div>

          <div className="dosContent bg-dark p-1">
            <p className="text-success">Jack <span className="text-purple">JSEM64</span> 
            <span className="text-warning"> ~/JSPortfolio/Contact.js</span> 
            <span className="text-primary"> (main) </span></p>

            <p>$ Interested in contacting me? Check out my GitHub, LinkedIn, or fill out the form below!</p>
            <p>$ open contactForm.js _ </p>
          </div>
        
        </div>
      </section>

      <section className="socials">
        <div className="github">
          <a href="https://github.com/blindsweatyhansolo" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/images/github-squared-400.png`)} alt='Github Logo'/>
          </a>
          <p>@ blindsweatyhansolo</p>
        </div>

        <div className="linkedin">
          <a href="https://www.linkedin.com/in/jack-semidey-774313222/" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/images/linkedin-400.png`)} alt='LinkedIn Logo'/>
          </a>
          <p>@ JackSemidey </p>
        </div>
      </section>

      <section className="contactForm d-flex justify-content-center">
        <div className="emailClientContainer border border-secondary bg-secondary text-light col-lg-8 col-12 shadow">
          
          <div className="windowBar px-1 d-flex justify-content-between">
            <div>
              <i class="bi bi-envelope"></i> contactForm.js
            </div>
            <div className="px-1">
                <span className="mx-1"><i class="bi bi-dash"></i></span>
                <span className="mx-1"><i class="bi bi-square"></i></span>
                <span className="mx-1"><i class="bi bi-x-square"></i></span>
            </div>
          </div>

          <div className="windowContent bg-danger d-flex">
            <p>INSERT FAKE EMAIL CLIENT HERE LOL</p>
          </div>
        </div>

      </section>
  
    </div>
  );
};

export default Contact;