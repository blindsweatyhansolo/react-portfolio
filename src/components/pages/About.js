import React from 'react';

function About() {
  return (
    <div className="container">
      <section className="about">
        <div className="mt-5 mb-2 dosContainer border border-secondary bg-secondary text-light col-12 shadow">
          <div className='dosBar px-1 d-flex justify-content-between'>
            <div>
              <i className="bi bi-terminal"></i> JSEM64:/c/Users/Jack/About.js
            </div>
            <div className="px-1">
              <span className="mx-1"><i className="bi bi-dash"></i></span>
              <span className="mx-1"><i className="bi bi-square"></i></span>
              <span className="mx-1"><i className="bi bi-x-square"></i></span>
            </div>
          </div>

          <div className="dosContent bg-dark p-1">
            <p className="text-success">Jack <span className="text-purple">JSEM64</span> 
            <span className="text-warning"> ~/JSPortfolio/About.js</span> 
            <span className="text-primary"> (main) </span></p>

            <p>$ Hi, I'm Jack!</p>
            <p>$ I am a barista turned Full Stack Web Developer based in the DMV.</p>
            <p>$ Film geek, amateur wood-worker, Dungeons and Dragons nerd, and overall adventurous guy.
              I like to build things on the web, and have a thirst for coffee and knowledge.
              After attending college for Film Arts and working full-time as a supervisor for Starbucks the
              last decade, I decided to shift gears into the lucatrive web development world. As a manager I learned vital
              team skills, adapted quickly to working in a fast-paced environment, and thinking out of the box. All skills
              I've found to be useful in my new field.
            </p>
            <p>$ open ~/assets/images/jack_profilepic.jpg </p>

          </div>
        
        </div>
      </section>

      <section className="profileImage d-flex justify-content-center">
        <div className="imageContainer border border-secondary bg-secondary text-light col-lg-8 col-12 shadow">
          
          <div className="windowBar px-1 d-flex justify-content-between">
            <div>
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

    </div>

  );
}

export default About;