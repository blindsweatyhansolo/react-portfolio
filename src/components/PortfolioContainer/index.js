import React, { useState } from 'react';
import Nav from '../Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

function PortfolioContainer() {
  // default page set to Home
  const [currentPage, setCurrentPage] = useState('Home');

  // render specific page on state change
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
  }; 

    // function to handle page state change
    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        {/* pass currentPage and handlePageChange as props to Nav */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* after conditionally matching specific page, render that page */}
        {renderPage()}
      </div>
    );
}

export default PortfolioContainer;