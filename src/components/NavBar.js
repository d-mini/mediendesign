import React, { useState } from 'react';
import './NavBar.css';
import { HashLink } from 'react-router-hash-link';

function NavBar(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const offsetScroll = (element) => {
    const offset = 85;
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
      <i className='burger-menu' onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill='#FFFFFF'>
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
          </g>
        </svg>
      </i>
      <ul className={ isNavExpanded ? "nav-menu-expanded" : "nav-menu" }>
        <li className='logo'>
          <HashLink smooth to='/#'>
            <svg viewBox="0 0 1024 512" xmlns="http://www.w3.org/2000/svg">
              <g fill='#fff'>
                <text x="83.533px" y="363.666px" style={{fontFamily:'NanumMyeongjo, Nanum Myeongjo, serif', fontSize:'300px'}}>삼겹살</text>
                <g fillOpacity={0}>
                  <path d="M1024,49.072l-49.072,-49.072l-925.856,0l-49.072,49.072l0,413.856l49.072,49.072l925.856,0l49.072,-49.072l-0,-413.856Z" />
                </g>
                <path d="M1024,49.072l-49.072,-49.072l-925.856,0l-49.072,49.072l0,413.856l49.072,49.072l925.856,0l49.072,-49.072l-0,-413.856Zm-20.833,8.629l-0,396.598c-0,-0 -36.868,36.868 -36.868,36.868c-0,-0 -908.598,-0 -908.598,-0c0,-0 -36.868,-36.868 -36.868,-36.868c0,-0 0,-396.598 0,-396.598c0,0 36.868,-36.868 36.868,-36.868c0,0 908.598,0 908.598,0l36.868,36.868Z"/>
              </g>
            </svg>
          </HashLink>
        </li>
        <li className='navitem'><HashLink className={'navlink' + (props.activeSection === 0 ? ' navlink-active' : '')} smooth to='/#'>Home</HashLink></li>
        <li className='navitem'><HashLink className={'navlink' + (props.activeSection === 1 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#about'>About</HashLink></li>
        <li className='navitem'><HashLink className={'navlink' + (props.activeSection === 2 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#ingredients'>Ingredients</HashLink></li>
        <li className='navitem'><HashLink className={'navlink' + (props.activeSection === 3 ? ' navlink-active' : '')} smooth scroll={offsetScroll} to='/#howto'>How To</HashLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;