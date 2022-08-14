import React from 'react';
import './Gallery.css';

function GalleryImage(props) {
  const description = props.description;
  return (
    <figure className='galleryImage'>
      {props.children}
      <figcaption className='w-full text-white text-center'>
        <div className='font-bold'>{props.label}</div>
        {
          description &&
          <div>{props.description}</div>
        }
      </figcaption>
    </figure>
  );
}

export default GalleryImage;