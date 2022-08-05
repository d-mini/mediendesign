import React from 'react';
import './NavLink.css';
import { NavLink } from 'react-router-dom';

function NavLink(props) {
  const handleClick = () => {
    const targetElement = document.getElementById(props.to);
    const offset = 130;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
	};

  return (
    <NavLink className='navlink' to={props.to} onClick={handleClick}>
      {props.children}
    </NavLink>
  );
}

export default NavLink;