import React, { useState } from 'react';
import validator from 'validator';

function Contact() {

  // create state variables to handle form fields, set to empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // error handling for form fields
  const [errorMessage, setErrorMessage] = useState('');



  // function to handle changes to input fields
  const handleInputChange = (e) => {
    // get value from targetted input triggered on change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // set state of name, email and message to captured value
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    };

    console.log(name, email, message);
  };

  // function to handle form submit
  const handleFormSubmit =(e) => {
    e.preventDefault();

    if (e.target.name === 'email') {
      const validEmail = validator.isEmail(e.target.value);

      if (!validEmail) {
        setErrorMessage('Please enter a valid email');
      } else {
        setErrorMessage('');
      }
    }

    // on success, clear out input fields
    setName('');
    setEmail('');
    setMessage('');

    console.log(name, email, message); 
    alert(`Thanks ${name}, I look forward to connecting with you!`);   
    
  };
  // vealidate form values, if invalid send error message
  // on success clear form fields and submit

  return (
    <div className="container">
      <section className="contact">
        <div className="mt-5 mb-2 dosContainer border border-secondary bg-secondary text-light col-12 shadow">
          <div className='dosBar px-1 d-flex justify-content-between'>
            <div>
              <i className="bi bi-terminal"></i> JSEM64:/c/Users/Jack/JSPortfolio/Contact.js
            </div>
            <div className="px-1">
              <span className="mx-1"><i className="bi bi-dash"></i></span>
              <span className="mx-1"><i className="bi bi-square"></i></span>
              <span className="mx-1"><i className="bi bi-x-square"></i></span>
            </div>
          </div>

          <div className="dosContent bg-dark p-1">
            <p className="text-success">Jack <span className="text-purple">JSEM64</span> 
            <span className="text-warning"> ~/JSPortfolio/Contact.js</span> 
            <span className="text-primary"> (main) </span></p>

            <p>$ Interested in contacting me? Check out more of my work on GitHub, reach out via LinkedIn, or fill out the form below!</p>
            <p>$ open contactForm.js _ </p>
          </div>
        
        </div>
      </section>

      {/* <section className="socials">
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
      </section> */}

      <section className="d-flex justify-content-center">
        <div className="emailClientContainer border border-secondary bg-secondary text-light col-lg-8 col-12 shadow">
          
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

          <div className="windowContent bg-danger d-flex-column">
            <h1>FAKE EMAIL CLIENT HEADER</h1>
            <div>
              <form className="contactForm">
                <label htmlFor="name">Name:</label>
                <input
                  defaultValue={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Name"
                />
                <label htmlFor="email">Email:</label>
                <input
                  defaultValue={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email"
                />
                <label htmlFor="message">Message:</label>
                <textarea
                  defaultValue={message}
                  name="message"
                  onChange={handleInputChange}
                  type="text"
                  rows="5"
                />

                {/* ERROR MESSAGE TO RENDER IF errorMessage EXISTS WITH SHORT CIRCUIT */}
                {errorMessage && (
                  <div>
                    <p className="error">{errorMessage}</p>
                  </div>
                )}

                <button type='submit' className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  );
};

export default Contact;