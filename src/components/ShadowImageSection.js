import React from 'react';
import './Section.css';

function ShadowImageSection(props) {
    return (
        <div className='w-full py-16 px-12 lg:px-20 lg:py-24 xl:px-36 sm:mt-4 lg:mt-0'>
            <div className='h-full w-full flex flex-col gap-8 lg:gap-16 lg:flex-row items-center relative z-0'>
                <div className={`w-full h-full shadow-image relative z-0 mb-4 lg:mb-6`}>
                    <div className='w-full h-full'>{props.image}</div>
                    <div className={`w-auto h-auto lg:w-full lg:h-full absolute bg-${props.color}-light -top-4 -right-4 -bottom-4 -left-4 lg:top-6 lg:right-6 lg:left-auto lg:bottom-auto -z-[1]`}></div>
                </div>
                <div className='flex flex-col text-center justify-center lg:text-left'>
                    {props.title}
                    {props.content}
                </div>
            </div>

        </div>
    );
}

export default ShadowImageSection;