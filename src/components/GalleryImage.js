import React from 'react';
import './Gallery.css';

function GalleryImage(props) {
  return (
    <figure className='galleryImage'>
      {props.children}
      <figcaption>
        <div>{props.label}</div>
        <div>{props.description}</div>
      </figcaption>
    </figure>
  );
}

export default GalleryImage;