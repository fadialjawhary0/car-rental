import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo/logo.png';
import './NavbarStyles.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='navbar-logo' draggable={false} />
      </Link>
      <div className='navbar-links'>
        <Link className='navbar-link navbar-home-link' to='/'>
          Home
        </Link>
        <Link className='navbar-link navbar-about-link' to='about'>
          About
        </Link>
        <Link className='navbar-link navbar-models-link' to='models'>
          Vehicle Models
        </Link>
        <Link
          className='navbar-link navbar-testimonials-link'
          to='testimonials'>
          Testimonials
        </Link>
        <Link className='navbar-link navbar-team-link' to='team'>
          Our Team
        </Link>
        <Link className='navbar-link navbar-contact-link' to='contact'>
          Contact
        </Link>
      </div>
      <div className='navbar-buttons'>
        <Link className='navbar-buttons-signin'>Sign In</Link>
        <Link className='navbar-buttons-register'>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
