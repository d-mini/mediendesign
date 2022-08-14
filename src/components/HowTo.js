import React from 'react';
import './Section.css';

import ssam from '../images/ssam.webp';
import bokkeumBap from '../images/bokkeumBap.jpg';
import doenjang from '../images/doenjang.jpg';
import soju from '../images/soju.jpg'
import ShadowImageSection from './ShadowImageSection';

function HowTo() {
    return (
        <div className='howto w-full'>
            <ShadowImageSection
                color='primary'
                image={<img src={ssam} alt='' />}
                title={<h1 className={`text-white lg:text-primary mb-3`}>How To Eat</h1>}
                content=
                {
                    <div>
                        <div className='mb-2'>
                            Usually, diners grill the meat themselves, flipping and cutting them with tongs and scissors, and eat directly from the grill. Additionally, 삼겹살 is commonly eaten as <span className='font-bold text-primary-light'>쌈</span> ("ssam", wrap).
                        </div>
                        <ol className='list-decimal'>
                            <li>
                                Grill the meat (and preferred vegetables) on the grill until both sides of the meat are cooked or even a little crispy.
                            </li>
                            <li>
                                Put a piece of lettuce on a plate or in your hand. Add a piece of perilla leaf and a piece of cooked pork.
                            </li>
                            <li>
                                Add accompaniments to preference such as ssamjang, sliced garlic, and some scallion salad for example.
                            </li>
                            <li>
                                Fold the lettuce leaf over so that you have a bite-sized package.
                            </li>
                            <li>
                                Eat the wrap in one mouthful!
                            </li>
                        </ol>
                    </div>
                }
            >
            </ShadowImageSection>
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
                <div className='py-12 px-12 sm:py-16 sm:px-16 flex flex-col sm:flex-row gap-8'>
                    <img src={bokkeumBap} alt='' />
                    <img src={doenjang} alt='' />
                </div>
            </div>
        </div>
    );
}

export default HowTo;