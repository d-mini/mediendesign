import React from 'react';
import './Section.css';

function About() {
    return (
        <div className='about w-full'>
            <div className='py-20 px-12 sm:py-24 sm:px-36'>
                <div className='relative grid gap-8 lg:gap-16 lg:grid-cols-2 grid-rows-1'>
                    <div className='relative text-center lg:text-right'>
                        <h1 className='text-primary mb-3'>About</h1>
                        <p className='mb-2'>
                            <span className='font-bold text-primary-light'>삼겹살</span> ("samgyeopsal", pork-belly) or 삼겹살-구이 ("samgyeopsal-gui", grilled pork belly) is one of the most popular grilled meat dishes in the Korean cuisine which uses pork belly meat as its main ingredient.
                        </p>
                        <p>
                            The literal translation of 삼겹살 is <span className='font-bold text-primary-light'>"three layer meat"</span>, referring to striations of lean meat and fat in the pork belly that appear as three layers when cut.
                        </p>
                    </div>
                    <div className='border-t-2 border-primary lg:absolute h-full lg:col-start-1 lg:col-end-3 lg:left-1/2 lg:border-t-0 lg:border-l-2'></div>
                    <div className='relative self-center'>
                        <div className='grid grid-cols-2 lg:grid-cols-[32px_minmax(0,_1fr)] grid-rows-3 gap-x-4 gap-y-2 items-end'>
                            <span className='text-primary-light text-3xl font-semibold text-right lg:text-left'>삼</span>
                            <span>"sam" - three</span>

                            <span className='text-primary-light text-3xl font-semibold text-right lg:text-left'>겹</span>
                            <span>"gyeop" - layers</span>

                            <span className='text-primary-light text-3xl font-semibold text-right lg:text-left'>살</span>
                            <span>"sal" - meat</span>
                        </div>

                        <div className='mt-4 italic text-center lg:text-left text-sm'>- Meaning of 삼겹살</div>
                    </div>
                </div>
            </div>

            <div className='w-full section-color'>
                <div className='text-center text-white py-20 px-12 sm:py-24 sm:px-24'>
                    <h2 className='text-primary-light mb-3'>More Interesting Facts</h2>
                    <ul className='list-disc'>
                        <li>
                            Due to its great popularity in South Korea, the third day of the third month, the <span className='font-bold'>3rd March</span>, is a designated day to promote the consumption of the grilled pork belly, the <span className='font-bold'>"Samgyeopsal Day"</span>.
                        </li>
                        <li>
                            There is a <span className='font-bold'>myth</span> in South Korea that <span className='font-bold'>eating 삼겹살 protects humans from air pollution</span> by fine dust. This is thought to have originated from the practice of Korean miners eating pork after an intensive mining operation.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;