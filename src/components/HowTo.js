import React from 'react';
import './Section.css';

import ssam from '../images/ssam.webp';
import bokkeumBap from '../images/bokkeumBap.jpg';
import doenjang from '../images/doenjang.jpg';

function HowTo() {
    return (
        <div className='howto w-full'>
            <div className='w-full py-20 px-12 sm:py-24 sm:px-36'>
                <div className='flex flex-col sm:flex-row'>
                    <img className='shadow-image shadow-image-green' src={ssam} alt='' />
                    <div className='flex flex-col text-center sm:text-left'>
                        <h1>How to eat</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className='w-full section-color'>
                <div className='py-12 px-12 sm:py-16 sm:px-16 flex flex-col sm:flex-row gap-2'>
                    <img src={bokkeumBap} alt='' />
                    <img src={doenjang} alt='' />
                </div>
            </div>
        </div>
    );
}

export default HowTo;