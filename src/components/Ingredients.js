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
                    <div>
                        <p className='mb-2'>
                            The main ingredient of 삼겹살 are <span className='font-bold text-white lg:text-secondary-light'>thick, fatty slices of pork belly</span> which are grilled on a metal griddle or charcoal grill. The meat is <span className='font-bold text-white lg:text-secondary-light'>usually neither marinated nor seasoned</span>.
                        </p>
                        <p>
                            Common accompaniments for 삼겹살 are several <span className='font-bold text-white lg:text-secondary-light'>vegetables</span> which are used to wrap the meat, can be eaten raw or grilled along with the meat, <span className='font-bold text-white lg:text-secondary-light'>Korean side dishes and dipping sauces</span> such as <span className='font-bold text-white lg:text-secondary-light'>쌈장</span> ("ssamjang", a thick spicy paste made with Korean chili paste and soy bean paste) and <span className='font-bold text-white lg:text-secondary-light'>기름장</span> ("gireumjang", made with sesame oil, salt, and black pepper).
                        </p>
                    </div>
                }
            >
            </ShadowImageSection>

            <div className='w-full py-12 px-8 sm:pb-8 sm:pt-4 sm:px-12 lg:py-16 lg:px-16 xl:py-20 xl:px-20 section-color-right'>
                <div className='flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-6'>
                    <h2 className='text-secondary-light sm:self-start xl:self-auto xl:text-right'>Vegetables</h2>
                    <Gallery>
                        <GalleryImage label='Lettuce' description=''>
                            <img src={lettuce} alt='Lettuce' />
                        </GalleryImage>
                        <GalleryImage label='Garlic' description=''>
                            <img src={garlic} alt='Garlic' />
                        </GalleryImage>
                        <GalleryImage label='깻잎' description={
                            <div>"Kkaennip"<br />Perilla Leaves</div>
                        }>
                            <img src={perilla} alt='Perilla Leaf' />
                        </GalleryImage>
                    </Gallery>
                </div>
            </div>

            <div className='w-full py-12 px-8 sm:pb-8 sm:pt-4 sm:px-12 lg:py-16 lg:px-16 section-color-left'>
                <div className='flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-6'>
                    <h2 className='text-secondary-light order-first xl:order-last sm:self-end xl:self-auto flex-shrink-0'>Side Dishes</h2>
                    <Gallery>
                        <GalleryImage label='파 무침' description={
                            <div>"Pa Muchim"<br />Scallion Salad</div>
                        }>
                            <img src={scallions} alt='Scallions' />
                        </GalleryImage>
                        <GalleryImage label='김치' description={
                            <div>"Kimchi"<br />Fermented Napa Cabbage</div>
                        }>
                            <img src={kimchi} alt='Kimchi' />
                        </GalleryImage>
                        <GalleryImage label='콩나물 무침' description={
                            <div>"Kongnamul Muchim"<br />Soybean Sprouts</div>
                        }>
                            <img src={sprouts} alt='Sprouts' />
                        </GalleryImage>
                    </Gallery>
                </div>
            </div>
        </div>
    );
}

export default Ingredients;