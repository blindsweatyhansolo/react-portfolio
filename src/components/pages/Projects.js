import React from 'react';

function Projects() {
  const projects = [
    {
      id: 'technically-speaking',
      title: 'Technically Speaking',
      description: 'A simple blog for sharing ideas and thoughts.',
      github: 'https://github.com/blindsweatyhansolo/tech-blog',
      liveURL: 'https://bshs-tech-blog.herokuapp.com/',
      src: require('../../assets/images/screenshots/technicallyspeaking.gif')
    },
    {
      id: 'employee-tracker',
      title: 'Employee Tracker',
      description: 'CLI Application for managers to navigate departments, roles, and employees in a SQL database.',
      github: 'https://github.com/blindsweatyhansolo/employee-tracker',
      src: require('../../assets/images/screenshots/employeetracker.gif')
    },
    {
      id: 'thought-spot',
      title: 'Thought Spot',
      description: 'Back-end for a faux social media site, using MongoDB.',
      github: 'https://github.com/blindsweatyhansolo/thought-spot',
      src: require('../../assets/images/screenshots/thoughtspot.gif')
    },
    {
      id: 'ballz-and-booze',
      title: 'Ballz & Booze',
      description: 'Application for finding scheduled NBA games, and bars/breweries to watch them in.',
      github: 'https://github.com/blindsweatyhansolo/ballzandbooze',
      liveURL: 'https://blindsweatyhansolo.github.io/ballzandbooze/',
      src: require('../../assets/images/screenshots/ballzandbooze.gif')
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'Find forecast information for any searched city',
      github: 'https://github.com/blindsweatyhansolo/weatherdashboard',
      liveURL: 'https://blindsweatyhansolo.github.io/weatherdashboard/',
      src: require('../../assets/images/screenshots/weatherdashboard.png')
    },
    { 
      id: 'pitchr',
      title: 'Pitchr',
      description: 'Pitch, vote and comment on ideas to fellow web developers. (Requires registration)',
      github: 'https://github.com/blindsweatyhansolo/pitchr',
      liveURL: 'https://pitchr314.herokuapp.com/',
      src: require('../../assets/images/screenshots/pitchr.png')
    },
    {
      id: 'budget-tracker',
      title: 'Budget Tracker',
      description: 'Keep track of your expenses online or offline with this PWA.',
      github: 'https://github.com/blindsweatyhansolo/budget-tracker',
      liveURL: 'https://bshs-budget-tracker.herokuapp.com/',
      src: require('../../assets/images/screenshots/BudgetTracker.gif')
    },
    {
      id: 'password-generator',
      title: 'Password Generator',
      description: 'Generate a simple or complex password for your account.',
      github: 'https://github.com/blindsweatyhansolo/PasswordGenerator',
      liveURL: 'https://blindsweatyhansolo.github.io/PasswordGenerator/',
      src: require('../../assets/images/screenshots/passwordgenerator.png')
    }
  ];




  return (
    <section className="projects d-flex justify-content-center">

      <div className="border border-secondary bg-secondary text-light col-lg-8 col-12 shadow">
        
        <div className="windowBar px-1 d-flex justify-content-between">
          <div>
            <i className="bi bi-folder"></i> Projects
          </div>
          <div className="px-1">
            <span className="mx-1"><i className="bi bi-dash"></i></span>
            <span className="mx-1"><i className="bi bi-square"></i></span>
            <span className="mx-1"><i className="bi bi-x-square"></i></span>
          </div>
        </div>

        <div className="container bg-dark p-2">
          <div className="row mx-1">
            <div className="col">
              {projects.map((project) => {
                return (
                  <div 
                    className="projectCard card m-1"
                    id={project.id}
                    key={project.title}
                  >
                    <img className="card-img-top pt-1"
                    src={project.src}
                    alt={project.title}
                    />
                    <div className="card-body">
                      <p className="card-title text-dark fs-1">{project.title}</p>
                      <p className="card-subtitle text-muted">{project.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Projects;