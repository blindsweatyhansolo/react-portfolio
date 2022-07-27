import React, { useState } from 'react';
import "./style.css";
const folderIconClosed = require('../../assets/images/icons/nav-icons/folder-closed.png');
const folderIconOpen = require('../../assets/images/icons/nav-icons/folder-open.png');

function Projects() {
  // array to hold back end project data
  const backEndProjects = [
    {
      id: 'thought-spot',
      title: 'Thought Spot',
      description: 'Back-end for a faux social media site, using MongoDB. Perform CRUD operations on users, thoughts, and reactions to thoughts, like those found on many current social media sites.',
      github: 'https://github.com/blindsweatyhansolo/thought-spot',
      src: require('../../assets/images/screenshots/thoughtspot.gif')
    },
    {
      id: 'employee-tracker',
      title: 'Employee Tracker',
      description: 'Team management tool CLI Application for managers to navigate departments, roles, and employees in a SQL database.',
      github: 'https://github.com/blindsweatyhansolo/employee-tracker',
      src: require('../../assets/images/screenshots/employeetracker.gif')
    },
    {
      id: 'ecommerce-backend',
      title: 'E-Commerce Backend',
      description: 'Back-end for a faux e-commerce site, using MySQL. Perform CRUD operations on products, product categories, and product tags.',
      github: 'https://github.com/blindsweatyhansolo/e-commerce-backend',
      src: require('../../assets/images/screenshots/ecommercebackend.gif')
    }
  ];

  // array to hold front end project data
  const frontEndProjects =[
    {
      id: 'popcorn-pals',
      title: 'Popcorn Pals',
      description: 'Search for movies, rate and review titles, and suggest them to your friends. See a quick list of suggestions from the home page, or visit your profile for a detailed list of all suggestions and rated titles.',
      github: 'https://github.com/blindsweatyhansolo/popcornpals',
      liveURL: 'https://popcornpals.herokuapp.com/',
      src: require('../../assets/images/screenshots/popcornpals.gif')
    },
    {
      id: 'technically-speaking',
      title: 'Technically Speaking',
      description: 'A simple CMS-style blog for sharing ideas and thoughts. Visitors can access the homepage, but further features like commenting and posting are hidden behind registration.',
      github: 'https://github.com/blindsweatyhansolo/tech-blog',
      liveURL: 'https://bshs-tech-blog.herokuapp.com/',
      src: require('../../assets/images/screenshots/technicallyspeaking.gif')
    },
    {
      id: 'ballz-and-booze',
      title: 'Ballz & Booze',
      description: 'Navigate March Madness with this application for finding scheduled NBA games, and bars/breweries to watch them in. Add or remove bars to your favorites. Utilizies calls from API-NBA and OpenBrewery DB.',
      github: 'https://github.com/blindsweatyhansolo/ballzandbooze',
      liveURL: 'https://blindsweatyhansolo.github.io/ballzandbooze/',
      src: require('../../assets/images/screenshots/ballzandbooze.gif')
    },
    {
      id: 'budget-tracker',
      title: 'Budget Tracker',
      description: 'Keep track of your expenses with or without network access with this simple budget tracker. Can be downloaded as a PWA for offline capabilities.',
      github: 'https://github.com/blindsweatyhansolo/budget-tracker',
      liveURL: 'https://bshs-budget-tracker.herokuapp.com/',
      src: require('../../assets/images/screenshots/BudgetTracker.gif')
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'Find forecast information for any searched city using calls to OneCall API from OpenWeather. Saved search history, current weather, five-day forecast, including UV index.',
      github: 'https://github.com/blindsweatyhansolo/weatherdashboard',
      liveURL: 'https://blindsweatyhansolo.github.io/weatherdashboard/',
      src: require('../../assets/images/screenshots/weatherdashboard.png')
    },
    { 
      id: 'pitchr',
      title: 'Pitchr',
      description: 'Idea board for fellow developers to pitch project ideas. Comment on and save ideas to your favorites, while managing your own submissions via the dashboard. Requires registration.',
      github: 'https://github.com/blindsweatyhansolo/pitchr',
      liveURL: 'https://pitchr314.herokuapp.com/',
      src: require('../../assets/images/screenshots/pitchr.png')
    },
    {
      id: 'workday-scheduler',
      title: 'Workday Scheduler',
      description: 'Easy to use calendar app to help you schedule your day. Single day set to standard work hours. Feel rejoiced to hit the Clear Your Day! button.',
      github: 'https://github.com/blindsweatyhansolo/weekdayscheduler',
      liveURL: 'https://blindsweatyhansolo.github.io/weekdayscheduler/',
      src: require('../../assets/images/screenshots/weekdayscheduler cropped.png')
    }
  ];

  // useState variables for swapping folder icons from closed to open, and separating
  // projects for display according to selection
  const [frontEndVisible, setFrontEndVisible] = useState(false);
  const [backEndVisible, setBackEndVisible] = useState(false);
  const [folderFrontEndOpen, setFrontEndFolderOpen] = useState(false);
  const [folderBackEndOpen, setBackEndFolderOpen] = useState(false);

  return (
    <section className="projects d-flex justify-content-center my-2">

      <div className="window text-light col-lg-8 col-12 shadow-lg row">
        
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
            <div className="folder" onClick={() => {
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
            <div className="folder" onClick={() => {
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
                  <div className='col-12 col-lg-6 p-1'>
                    <div 
                      className="card card-flip rounded shadow-lg h-100"
                      id={project.id}
                      key={project.title}
                    >
                    <div className="card-front d-flex align-items-center">
                      <div className="card-body">
                        <img className="card-img img-fluid pt-1"
                        src={project.src}
                        alt={project.title}
                        />
                          <div>
                            <p className="card-title text-dark text-center fs-1">{project.title}</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back d-flex align-items-center">
                        <div className="card-body">
                          <p className="card-title text-dark fs-1">{project.title}</p>
                          <p className="card-text text-dark">{project.description}</p>
                          <div className="d-flex justify-content-around pt-1 flex-wrap">
                            <a href={project.liveURL} className="btn btn-primary" target="_blank" rel="noreferrer">
                              <i className="bi bi-globe"></i> See Live</a>
                            <a href={project.github} className="btn btn-primary" target="_blank" rel="noreferrer">
                            <i className="bi bi-github"></i> See Repo</a>
                          </div>
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
                    <div className='col-12 col-lg-6 p-1'>
                      <div 
                        className="card card-flip my-1 h-100 rounded shadow-lg"
                        id={project.id}
                        key={project.title}
                      >
                        <div className="card-front d-flex align-items-center">
                          <div className="card-body">
                            <img className="card-img img-fluid pt-1"
                            src={project.src}
                            alt={project.title}
                            />
                            <div>
                              <p className="card-title text-dark text-center fs-2">{project.title}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card-back d-flex align-items-center">
                          <div className="card-body">
                            <p className="card-title text-dark fs-2">{project.title}</p>
                            <p className="card-subtitle text-muted">{project.description}</p>
                            <div className="d-flex justify-content-center pt-1">
                              <a href={project.github} className="btn btn-primary" target="_blank" rel="noreferrer">
                              <i className="bi bi-github"></i> See Repo</a>
                            </div>
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