import React from 'react';

function Gallery(props) {
  return (
    <div className='w-full flex justify-center sm:justify-between gap-8 sm:gap-0 flex-wrap'>
      {props.children}
    </div>
  );
}

export default Gallery;