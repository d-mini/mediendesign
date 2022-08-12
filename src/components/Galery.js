import React from 'react';
import GaleryImage from './GaleryImage';
import './Galery.css';
import porkBelly from '../images/pork_belly.jpg';
import kimchi from '../images/kimchi.jpg';


function Galery() {
  return (
    <div className='galery'>
      <GaleryImage src={'../images/pork_belly.jpg'} label='Pork Belly'></GaleryImage>
      <GaleryImage src={'../images/kimchi.jpg'} label='Kimchi'></GaleryImage>
      <GaleryImage src={'../images/pork_belly.jpg'} label='Pork Belly'></GaleryImage>
      <GaleryImage src={'../images/kimchi.jpg'} label='Kimchi'></GaleryImage>
    </div>
  );
}

export default Galery;