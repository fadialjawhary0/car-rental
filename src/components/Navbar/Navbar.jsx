import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMenu2, IconX } from '@tabler/icons-react';

import Logo from '../../assets/logo/logo.png';
import './NavbarStyles.scss';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

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

      <div className={`mobile-navbar ${nav ? 'open-nav' : ''}`}>
        <div onClick={openNav} className='mobile-navbar_close'>
          <IconX width={30} height={30} />
        </div>
        <ul className='mobile-navbar_links'>
          <li>
            <Link onClick={openNav} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to='/models'>
              Models
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to='/testimonials'>
              Testimonials
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to='/team'>
              Our Team
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <IconMenu2
        className='navbar-mobile_menu_icon'
        width={'3rem'}
        height={'3rem'}
        onClick={openNav}
      />
    </div>
  );
};

export default Navbar;
