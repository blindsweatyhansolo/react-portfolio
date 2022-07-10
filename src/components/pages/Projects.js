import React, { useState } from 'react';
import "./style.css";
const folderIconClosed = require('../../assets/images/icons/nav-icons/folder-closed.png');
const folderIconOpen = require('../../assets/images/icons/nav-icons/folder-open.png');

function Projects() {
  // array to hold project data
  const backEndProjects = [
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
      id: 'password-generator',
      title: 'Password Generator',
      description: 'Generate a simple or complex password for your account.',
      github: 'https://github.com/blindsweatyhansolo/PasswordGenerator',
      liveURL: 'https://blindsweatyhansolo.github.io/PasswordGenerator/',
      src: require('../../assets/images/screenshots/passwordgenerator.png')
    }
  ];

  const frontEndProjects =[
    {
      id: 'technically-speaking',
      title: 'Technically Speaking',
      description: 'A simple blog for sharing ideas and thoughts.',
      github: 'https://github.com/blindsweatyhansolo/tech-blog',
      liveURL: 'https://bshs-tech-blog.herokuapp.com/',
      src: require('../../assets/images/screenshots/technicallyspeaking.gif')
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
      id: 'budget-tracker',
      title: 'Budget Tracker',
      description: 'Keep track of your expenses online or offline with this PWA.',
      github: 'https://github.com/blindsweatyhansolo/budget-tracker',
      liveURL: 'https://bshs-budget-tracker.herokuapp.com/',
      src: require('../../assets/images/screenshots/BudgetTracker.gif')
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'Find forecast information for any searched city.',
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
      id: 'workday-scheduler',
      title: 'Workday Scheduler',
      description: 'Calendar app to help you schedule your day.',
      github: 'https://github.com/blindsweatyhansolo/weekdayscheduler',
      liveURL: 'https://blindsweatyhansolo.github.io/weekdayscheduler/',
      src: require('../../assets/images/screenshots/weekdayscheduler.png')
    }
  ];

  const [frontEndVisible, setFrontEndVisible] = useState(false);
  const [backEndVisible, setBackEndVisible] = useState(false);
  const [folderFrontEndOpen, setFrontEndFolderOpen] = useState(false);
  const [folderBackEndOpen, setBackEndFolderOpen] = useState(false);

  return (
    <section className="projects d-flex justify-content-center mt-4">

      <div className="window text-light col-lg-8 col-12 shadow row">
        
        <div className="windowBar py-1 d-flex justify-content-between">
          <div className="windowTitle px-2">
            <i className="bi bi-folder"></i> Projects
          </div>
          <div className="px-1">
            <span className="mx-1"><i className="bi bi-dash"></i></span>
            <span className="mx-1"><i className="bi bi-square"></i></span>
            <span className="mx-1"><i className="bi bi-x-square"></i></span>
          </div>
        </div>

        <div className="container bg-dark p-2">
          <div className="d-flex justify-content-around text-center">
            <div onClick={() => {
              setFrontEndVisible(true);
              setBackEndVisible(false);
              setFrontEndFolderOpen(true);
              setBackEndFolderOpen(false);
            }}>
              {folderFrontEndOpen ? (
                <img src={folderIconOpen} alt=""/>
              ) : (
                <img src={folderIconClosed} alt=""/>
              )}
              <p>Front-End Projects</p>
            </div>
            <div onClick={() => {
              setFrontEndVisible(false);
              setBackEndVisible(true);
              setBackEndFolderOpen(true);
              setFrontEndFolderOpen(false);
            }}>
              {folderBackEndOpen ? (
                <img src={folderIconOpen} alt=""/>
              ) : (
              <img src={folderIconClosed} alt=""/>
              )}
              <p>Back-End Projects</p>
            </div>
          </div>
          <div className="container mx-1">
            {frontEndVisible ? (
              <div className="row">
              {frontEndProjects.map((project) => {
                return (
                  <div className='col-12 col-lg-4'>
                    <div 
                      className="card my-1"
                      id={project.id}
                      key={project.title}
                    >
                      <img className="card-img img-fluid pt-1"
                      src={project.src}
                      alt={project.title}
                      />
                      <div className="card-body">
                        <div>
                          <p className="card-title text-dark fs-1">{project.title}</p>
                          <p className="card-subtitle text-muted">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              </div>
            ) : (" ")}

            {backEndVisible ? (
              <div className="row">
                {backEndProjects.map((project) => {
                  return (
                    <div className='col-12 col-lg-4'>
                      <div 
                        className="card my-1"
                        id={project.id}
                        key={project.title}
                      >
                        <img className="card-img img-fluid pt-1"
                        src={project.src}
                        alt={project.title}
                        />
                        <div className="card-body">
                          <div>
                            <p className="card-title text-dark text-center fs-2">{project.title}</p>
                            <p className="card-subtitle text-muted">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (" ")}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Projects;