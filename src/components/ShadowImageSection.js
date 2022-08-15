import React from 'react';
import './Section.css';

function ShadowImageSection(props) {
    return (
        <div className='w-full py-12 px-12 lg:px-20 lg:py-24 xl:px-36 mt-6 lg:mt-0 mb-6'>
            <div className='h-full w-full flex flex-col gap-8 lg:gap-16 lg:flex-row items-center relative z-0'>
                <div className={`shadow-image lg:relative z-0`}>
                    <div className='w-full h-full'>{props.image}</div>
                    <div className={`w-auto h-auto lg:w-full lg:h-full absolute bg-${props.color}-light -top-4 -right-8 -bottom-4 -left-8 lg:top-6 lg:right-6 lg:left-auto lg:bottom-auto -z-[1]`}></div>
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