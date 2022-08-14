import React from 'react';
import './Section.css';

function About() {
    return (
        <div className='about w-full'>
            <div className='py-20 px-12 sm:py-24 sm:px-36'>
                <div className='relative grid gap-8 lg:gap-16 lg:grid-cols-2 grid-rows-1'>
                    <div className='relative text-center lg:text-right'>
                        <h1 className='text-primary mb-3'>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='border-t-2 lg:absolute h-full lg:col-start-1 lg:col-end-3 lg:left-1/2 lg:border-t-0 lg:border-l-2'></div>
                    <div className='relative text-center lg:text-left'>Test</div>
                </div>
            </div>

            <div className='w-full section-color'>
                <div className='text-center text-white py-20 px-12 sm:py-24 sm:px-24'>
                    <h2 className='text-primary mb-3'>More Interesting Facts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
}

export default About;