import React from 'react';
import './NavBar.css';
import NavLink from './NavLink';
import logo from '../logo.svg';

function NavBar(props) {
  return (
    <nav className={`navbar navbar-${props.color}`}>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <img src={logo} width="90" height="90" alt="Logo" />
      <NavLink></NavLink>
      <NavLink></NavLink>
    </nav>
  );
}

export default NavBar;