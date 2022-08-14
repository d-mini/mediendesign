import React from 'react';
import './Section.css';
import Gallery from './Gallery';

import samgyeopsal from '../images/samgyeopsal.jpg';
import porkBelly from '../images/porkBelly.jpg';

function Ingredients() {
    return (
        <div className='ingredients w-full'>
            <img className='section__image' src={samgyeopsal} alt='' />

            <div className='py-20 px-12 sm:py-16 sm:px-36 flex flex-col gap-8 sm:flex-row'>
                <img className='shadow-image shadow-image-red' src={porkBelly} alt='' />
                <div className='flex flex-col text-center justify-center sm:text-left'>
                    <h1>Ingredients</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div className='w-full section-color-right'>
                <div className='flex flex-col xl:flex-row items-center justify-center gap-4 sm:gap-8 py-12 px-12 sm:py-16 sm:px-16'>
                    <h2>Vegetables</h2>
                    <Gallery></Gallery>
                </div>
            </div>

            <div className='w-full section-color-left'>
                <div className='flex flex-col xl:flex-row items-center justify-center gap-4 sm:gap-8 py-12 px-12 sm:py-16 sm:px-16'>
                    <Gallery></Gallery>
                    <h2 className='order-first sm:order-none'>Side Dishes</h2>
                </div>
            </div>
        </div>
    );
}

export default Ingredients;