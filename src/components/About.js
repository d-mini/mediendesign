import React from 'react';
import './Section.css';

function About() {
    return (
        <div className='about w-full'>
            <div className='py-20 px-12 sm:py-24 sm:px-36'>
                <div className='relative grid gap-8 sm:gap-16 sm:grid-cols-2 grid-rows-1'>
                    <div className='relative text-center sm:text-right'>
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='sm:absolute sm:h-80 border-t-2 sm:left-1/2 sm:border-t-0 sm:border-l-2'></div>
                    <div className='relative text-center sm:text-left'>Test</div>
                </div>
            </div>

            <div className='w-full section-color'>
                <div className='py-20 px-12 sm:py-24 sm:px-36'>
                    <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
}

export default About;