import React, { useState } from 'react';
import './NavBar.css';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/logo.svg';

function NavBar(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const offsetScroll = (element) => {
    const offset = 130;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
	};

  return (
    <nav className={`navbar navbar-${props.color}`}>
      <button className='burger-menu' onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill='#FFFFFF'>
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
          </g>
        </svg>
      </button>
      <ul className={ isNavExpanded ? "nav-menu-expanded" : "nav-menu" }>
        <li className='logo'><HashLink smooth to='/#'><img src={logo} alt="Logo"/></HashLink></li>
        <li className='navitem'><HashLink className={'navlink' + (props.activeSection === 0 ? ' navlink-active' : '')} smooth to='/#'>Home</HashLink></li>
        <li className='navitem'><HashLink className={'navlink' + (props.activeSection === 1 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#section1'>About</HashLink></li>
        <li className='navitem'><HashLink className={'navlink' + (props.activeSection === 2 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#section2'>Ingredients</HashLink></li>
        <li className='navitem'><HashLink className={'navlink' + (props.activeSection === 3 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#section3'>How To</HashLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;