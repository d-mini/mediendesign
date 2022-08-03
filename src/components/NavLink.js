import React from 'react';
import './NavLink.css';

function NavLink(props) {
  const handleClick = () => {
		document.getElementById(props.toId).scrollIntoView({ behavior: 'smooth' });
	};

  return (
    <span className='navlink' onClick={handleClick}>
      {props.children}
    </span>
  );
}

export default NavLink;