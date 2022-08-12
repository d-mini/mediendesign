import React from 'react';
import GaleryImage from './GaleryImage';
import './Galery.css';
import porkBelly from '../images/pork_belly.jpg';
import kimchi from '../images/kimchi.jpg';


function Galery() {
  return (
    <div className='galery'>
      <GaleryImage label='Kimchi'>
        <img src={kimchi} alt='Pork Belly' />
      </GaleryImage>
      <GaleryImage label='Pork Belly'>
        <img src={porkBelly} alt='Pork Belly' />
      </GaleryImage>
      <GaleryImage label='Kimchi'>
        <img src={kimchi} alt='Kimchi' />
      </GaleryImage>
    </div>
  );
}

export default Galery;