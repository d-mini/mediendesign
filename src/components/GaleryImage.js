import React from 'react';
import './Galery.css';

function GaleryImage(props) {
  return (
    <figure className='galeryImage'>
      <img src={props.src} alt={props.label} />
      <figcaption>{props.label}</figcaption>
    </figure>
  );
}

export default GaleryImage;