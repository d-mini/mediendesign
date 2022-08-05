import React from 'react';
import './NavBar.css';
import { HashLink } from 'react-router-hash-link';

function NavBar(props) {
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
      <ul>
        <li><HashLink className={'navlink' + (props.activeSection === 0 ? ' navlink-active' : '')} smooth to='/#'>Home</HashLink></li>
        <li><HashLink className={'navlink' + (props.activeSection === 1 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#section1'>Ingredients</HashLink></li>
        <li className='logo'><HashLink smooth to='/#'><img src='/images/logo.svg' alt="Logo"/></HashLink></li>
        <li><HashLink className={'navlink' + (props.activeSection === 2 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#section2'>Test</HashLink></li>
        <li><HashLink className={'navlink' + (props.activeSection === 3 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#section3'>Test</HashLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;