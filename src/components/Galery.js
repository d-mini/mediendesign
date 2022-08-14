import React from 'react';
import GaleryImage from './GaleryImage';
import './Galery.css';
import sprouts from '../images/sprouts.jpg';
import kimchi from '../images/kimchi.jpg';
import scallions from '../images/scallions.webp';


function Galery() {
  return (
    <div className='galery'>
      <GaleryImage label='Pa Muchim' description='Scallion Salad'>
        <img src={scallions} alt='Scallions' />
      </GaleryImage>
      <GaleryImage label='Kimchi' description='Fermented Cabbage'>
        <img src={kimchi} alt='Pork Belly'  />
      </GaleryImage>
      <GaleryImage label='Kongnamul Muchim' description='Soybean Sprouts'>
        <img src={sprouts} alt='Sprouts' />
      </GaleryImage>
    </div>
  );
}

export default Galery;