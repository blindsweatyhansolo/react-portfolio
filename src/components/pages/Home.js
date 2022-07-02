import React from 'react';

function Home() {



  return (
    <div className="container home">

      <div className='my-5 dosContainer border border-secondary bg-secondary text-light col-12 shadow'>

        <div className='dosBar px-1 d-flex justify-content-between'>
          <div>
            <i class="bi bi-terminal"></i> JSEM64:/c/Users/Jack
          </div>

          <div className="px-1">
            <span className="mx-1"><i class="bi bi-dash"></i></span>
            <span className="mx-1"><i class="bi bi-square"></i></span>
            <span className="mx-1"><i class="bi bi-x-square"></i></span>
          </div>
        </div>

        <div className="dosContent bg-dark p-1">
          <p className="text-success">Jack <span className="text-purple">JSEM64</span> 
          <span className="text-warning"> ~/JSPortfolio</span> 
          <span className="text-primary"> (main) </span></p>
          <p>$ Hello World!</p>
          <p>$ My name is Jack</p>
          <p>$ Full Stack Web Developer</p>
          <p>$ Would you like to know more? <span className="showMore">YES _</span></p>
        </div>

      </div> 

    </div>
  );
};

export default Home