import React, { useState } from 'react';
import validator from 'validator';
// const githubIcon = require('../../assets/images/github-squared-400.png');

function Contact() {
  // error handling for form fields
  const [errorMessage, setErrorMessage] = useState('');
  
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
    alert(`Thanks ${name}, I look forward to connecting with you!`);
  };

  return (
    <div className="container">
      <section className="contact">
        <div className="mt-5 mb-2 dosContainer border border-secondary bg-secondary text-light col-12 shadow">
          <div className='dosBar px-1 d-flex justify-content-between'>
            <div>
              <i className="bi bi-terminal"></i> JSEM64:/c/Users/Jack/Contact.js
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
  
      <section className="d-flex justify-content-center">
        <div className="border border-secondary text-light col-lg-8 col-12 shadow">
          
          <div className="px-1 d-flex justify-content-between bg-secondary">
            <div>
              <i className="bi bi-envelope"></i> contactForm.js
            </div>
            <div className="px-1">
                <span className="mx-1"><i className="bi bi-dash"></i></span>
                <span className="mx-1"><i className="bi bi-square"></i></span>
                <span className="mx-1"><i className="bi bi-x-square"></i></span>
            </div>
          </div>

          <div className="contact">
            <div className="row">
              <div className="col-md-3">
                
                <div className="contact-info px-2">
                  <h3>Contact Me</h3>
                  <p>I would love to hear from you!</p>
                </div>

              </div>
              <div className="col-md-9">
                <div className="contact-form p-2">
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="fname">Name:</label>
                    <div className="col-sm-10">          
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Name" 
                    name="name"
                    onBlur={handleInputChange}
                    defaultValue={name}
                     />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                    <input 
                      defaultValue={email}
                      name="email"
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Enter Email"
                      className='form-control'
                    />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="message">Message:</label>
                    <div className="col-sm-10">
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
                  </div>

                  {errorMessage && (
                    <div>
                      <p className='error-text text-danger'>{errorMessage}</p>
                    </div>
                  )}

                  <div className="form-group">        
                    <div className="col-sm-offset-2 col-sm-10 pt-2 d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                        <i className='bi bi-send'></i> Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;