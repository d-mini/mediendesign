import React from 'react';
import GaleryImage from './GaleryImage';
import './Galery.css';
import porkBelly from '../images/pork_belly.jpg';
import kimchi from '../images/kimchi.jpg'


function Galery() {
  return (
    <div className='galery'>
      <GaleryImage src={porkBelly} label='Pork Belly'></GaleryImage>
      <GaleryImage src={kimchi} label='Kimchi'></GaleryImage>
      <GaleryImage src={porkBelly} label='Pork Belly'></GaleryImage>
      <GaleryImage src={kimchi} label='Kimchi'></GaleryImage>
    </div>
  );
}

export default Galery;