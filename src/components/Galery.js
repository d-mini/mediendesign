import React from 'react';
import GaleryImage from './GaleryImage';
import './Galery.css';

function Galery() {
  return (
    <div className='galery'>
      <GaleryImage src='/images/pork_belly.jpg' label='Pork Belly'></GaleryImage>
      <GaleryImage src='/images/pork_belly.jpg' label='Pork Belly'></GaleryImage>
      <GaleryImage src='/images/pork_belly.jpg' label='Pork Belly'></GaleryImage>
      <GaleryImage src='/images/pork_belly.jpg' label='Pork Belly'></GaleryImage>
    </div>
  );
}

export default Galery;