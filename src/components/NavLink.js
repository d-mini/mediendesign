import React from 'react';
import './NavLink.css';

function NavLink(props) {
  const handleClick = () => {
    const targetElement = document.getElementById(props.toId);
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
    <span className='navlink' onClick={handleClick}>
      {props.children}
    </span>
  );
}

export default NavLink;