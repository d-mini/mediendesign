import React from 'react';
import './NavBar.css';
import NavLink from './NavLink';

function NavBar(props) {
  return (
    <nav className={`navbar navbar-${props.color}`}>
      <ul>
        <li><NavLink toId='main-img'>Home</NavLink></li>
        <li><NavLink toId='section1'>Ingredients</NavLink></li>
        <li className='logo'><NavLink toId='main-img'><img src='/images/logo.svg' alt="Logo"/></NavLink></li>
        <li><NavLink toId='section2'>Test</NavLink></li>
        <li><NavLink toId='section3'>Test</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;