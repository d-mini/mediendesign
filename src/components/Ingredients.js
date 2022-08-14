import React from 'react';
import './Section.css';
import Galery from './Galery';

import samgyeopsal from '../images/samgyeopsal.jpg';
import porkBelly from '../images/porkBelly.jpg';

function Ingredients() {
    return (
        <div className='ingredients section'>
            <img className='section__image' src={samgyeopsal} alt='' />

            <div className='section__content flex-row'>
                <img className='image-shadow' src={porkBelly} alt='' />
                <div className='flex-column'>
                    <h1>Ingredients</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div className='section-color-right'>
                <div className='section__content'>
                    <h2>Test</h2>
                    <Galery></Galery>
                </div>
            </div>

            <div className='section-color-left'>
                <div className='section__content'>
                    <h2>Test</h2>
                    <Galery></Galery>
                </div>
            </div>
        </div>
    );
}

export default Ingredients;