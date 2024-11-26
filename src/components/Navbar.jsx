import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Products from '../pages/Products';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' exact to='/' activeClassName='active'>
          Chris Pepper Portfolio
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                exact
                to='/'
                activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                exact
                to='/portfolio'
                activeClassName='active'
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
