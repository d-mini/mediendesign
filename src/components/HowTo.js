import React from 'react';
import './Section.css';

import ssam from '../images/ssam.webp';
import bokkeumBap from '../images/bokkeumBap.jpg';
import doenjang from '../images/doenjang.jpg';
import soju from '../images/soju.jpg'

function HowTo() {
    return (
        <div className='howto w-full'>
            <div className='w-full py-20 px-12 sm:py-24 sm:px-36 flex flex-col gap-12 lg:flex-row'>
                <img className='shadow-image shadow-image-green' src={ssam} alt='' />
                <div className='flex flex-col text-center justify-center lg:text-left'>
                    <h1 className='mb-3 text-primary'>How To Eat</h1>
                    <ol className='list-decimal'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    </ol>
                </div>
            </div>
            <div className='w-full flex flex-col gap-8 pt-0 pb-20 px-12 sm:pb-24 sm:px-36'>
                <div className='relative'>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='absolute -right-8 sm:-right-16 xl:-right-24 bottom-0 h-full max-h-24'>
                        <img src={soju} alt='' className='h-full w-auto -rotate-12' />
                        <span>Test</span>
                    </div>
                </div>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className='w-full section-color'>
                <div className='py-12 px-12 sm:py-16 sm:px-16 flex flex-col sm:flex-row gap-4'>
                    <img src={bokkeumBap} alt='' />
                    <img src={doenjang} alt='' />
                </div>
            </div>
        </div>
    );
}

export default HowTo;