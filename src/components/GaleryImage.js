import React from 'react';
import './Galery.css';

function GaleryImage(props) {
  return (
    <figure className='galeryImage'>
      {props.children}
      <figcaption>
        <div>{props.label}</div>
        <div>{props.description}</div>
      </figcaption>
    </figure>
  );
}

export default GaleryImage;