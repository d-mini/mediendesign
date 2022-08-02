import React from 'react';
import './NavBar.css';
import NavLink from './NavLink';

function NavBar() {
  return (
    <div className='NavBar'>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
    </div>
  );
}

export default NavBar;