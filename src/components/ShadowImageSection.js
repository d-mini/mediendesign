import React from 'react';
import './Section.css';

function ShadowImageSection(props) {
    return (
        <div className='w-full py-20 px-12 sm:py-24 sm:px-36 '>
            <div className='h-full w-full flex flex-col gap-8 lg:gap-16 lg:flex-row items-center relative z-0'>
                <div className={`shadow-image lg:relative z-0 w-full h-full`}>
                    <div className='w-full h-full'>{props.image}</div>
                    <div className={`w-auto h-auto lg:w-full lg:h-full absolute bg-${props.color}-light -top-6 -right-8 -bottom-6 -left-8 lg:top-6 lg:right-6 lg:left-auto lg:bottom-auto -z-[1]`}></div>
                </div>
                <div className='relative z-0 flex flex-col text-center justify-center lg:text-left'>
                    {props.title}
                    <div className='text-white lg:text-black'>
                        {props.content}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShadowImageSection;