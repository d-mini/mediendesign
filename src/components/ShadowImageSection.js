import React from 'react';
import './Section.css';

function ShadowImageSection(props) {
    return (
        <div className='section__shadow-image'>
            <div className={`shadow-image shadow-image-${props.color}`}>{props.children}</div>
            <div>
                <h1>{props.title}</h1>
                <div className='content'>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default ShadowImageSection;