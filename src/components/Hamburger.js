import React from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return (
    <div className='hamburger-menu'>
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background">

        </div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li><Link to="/opportunities">Opportunities</Link></li>
                  <li><Link to="/solutions">Solutions</Link></li>
                  <li><Link to="/contact-us">Contact us</Link></li>

                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, repudiandae porro soluta in dignissimos totam ea vitae. Assumenda, corrupti facilis. Iusto aliquid, dicta quae dolorum atque praesentium earum quos laborum.</p>                     
              </div>
              <div className="locations">
                Locations: 
                <span>Tokyo</span>
                <span>New-York</span>
                <span>Paris</span>
                <span>Shangai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;