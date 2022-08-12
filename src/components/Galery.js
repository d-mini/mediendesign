import React from 'react';
import GaleryImage from './GaleryImage';
import './Galery.css';
import sprouts from '../images/sprouts.jpg';
import kimchi from '../images/kimchi.jpg';
import scallions from '../images/scallions.webp';


function Galery() {
  return (
    <div className='galery'>
      <GaleryImage label='Scallions'>
        <img src={scallions} alt='Scallions' />
      </GaleryImage>
      <GaleryImage label='Kimchi'>
        <img src={kimchi} alt='Pork Belly' />
      </GaleryImage>
      <GaleryImage label='Sprouts'>
        <img src={sprouts} alt='Sprouts' />
      </GaleryImage>
    </div>
  );
}

export default Galery;