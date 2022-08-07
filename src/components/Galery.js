import React from 'react';
import GaleryImage from './GaleryImage';
import './Galery.css';
import porkBelly from '../images/pork_belly.jpg';


function Galery() {
  return (
    <div className='galery'>
      <GaleryImage src={porkBelly} label='Pork Belly'></GaleryImage>
      <GaleryImage src={porkBelly} label='Pork Belly'></GaleryImage>
      <GaleryImage src={porkBelly} label='Pork Belly'></GaleryImage>
      <GaleryImage src={porkBelly} label='Pork Belly'></GaleryImage>
    </div>
  );
}

export default Galery;