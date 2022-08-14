import React from 'react';
import GalleryImage from './GalleryImage';
import './Gallery.css';
import sprouts from '../images/sprouts.jpg';
import kimchi from '../images/kimchi.jpg';
import scallions from '../images/scallions.webp';


function Gallery() {
  return (
    <div className='gallery'>
      <GalleryImage label='Pa Muchim' description='Scallion Salad'>
        <img src={scallions} alt='Scallions' />
      </GalleryImage>
      <GalleryImage label='Kimchi' description='Fermented Cabbage'>
        <img src={kimchi} alt='Pork Belly'  />
      </GalleryImage>
      <GalleryImage label='Kongnamul Muchim' description='Soybean Sprouts'>
        <img src={sprouts} alt='Sprouts' />
      </GalleryImage>
    </div>
  );
}

export default Gallery;