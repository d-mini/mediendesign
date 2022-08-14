import React from 'react';
import './Section.css';
import Gallery from './Gallery';
import GalleryImage from './GalleryImage';
import './Gallery.css';

import samgyeopsal from '../images/samgyeopsal.jpg';
import porkBelly from '../images/porkBelly.jpg';

import sprouts from '../images/sprouts.jpg';
import kimchi from '../images/kimchi.jpg';
import scallions from '../images/scallions.webp';

import garlic from '../images/garlic.jpg';
import lettuce from '../images/lettuce.jpg';
import perilla from '../images/perilla.jpg';
import ShadowImageSection from './ShadowImageSection';

function Ingredients() {
    return (
        <div className='ingredients w-full'>
            <img className='section__image' src={samgyeopsal} alt='' />

            <ShadowImageSection
                color='secondary'
                image={<img src={porkBelly} alt='' />}
                title={<h1 className={`text-white lg:text-secondary mb-3`}>Ingredients</h1>}
                content=
                {
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                }
            >
            </ShadowImageSection>

            <div className='w-full section-color-right'>
                <div className='flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-6 py-12 px-12 sm:py-16 sm:px-16'>
                    <h2 className='text-secondary-light sm:self-start xl:self-auto xl:text-right'>Vegetables</h2>
                    <Gallery>
                        <GalleryImage label='Lettuce' description=''>
                            <img src={lettuce} alt='Lettuce' />
                        </GalleryImage>
                        <GalleryImage label='Garlic' description=''>
                            <img src={garlic} alt='Garlic' />
                        </GalleryImage>
                        <GalleryImage label='Kkaennip' description='Perilla Leaf'>
                            <img src={perilla} alt='Perilla Leafs' />
                        </GalleryImage>
                    </Gallery>
                </div>
            </div>

            <div className='w-full section-color-left'>
                <div className='flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-6 py-12 px-12 sm:py-16 sm:px-16'>
                    <h2 className='text-secondary-light order-first xl:order-last sm:self-end xl:self-auto'>Side Dishes</h2>
                    <Gallery>
                        <GalleryImage label='Pa Muchim' description='Scallion Salad'>
                            <img src={scallions} alt='Scallions' />
                        </GalleryImage>
                        <GalleryImage label='Kimchi' description='Fermented Cabbage'>
                            <img src={kimchi} alt='Pork Belly' />
                        </GalleryImage>
                        <GalleryImage label='Kongnamul Muchim' description='Soybean Sprouts'>
                            <img src={sprouts} alt='Sprouts' />
                        </GalleryImage>
                    </Gallery>
                </div>
            </div>
        </div>
    );
}

export default Ingredients;