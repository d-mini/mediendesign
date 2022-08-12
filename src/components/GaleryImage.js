import React from 'react';
import './Galery.css';

function GaleryImage(props) {
  return (
    <figure className='galeryImage'>
      {props.children}
      <figcaption>{props.label}</figcaption>
    </figure>
  );
}

export default GaleryImage;