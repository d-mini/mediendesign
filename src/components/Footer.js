import React from 'react';

function Footer() {
  return (
    <div className='bg-main h-16 flex items-center text-white p-4'>
      <span className='h-full'>
        <svg className='h-full' viewBox="0 0 1024 512" xmlns="http://www.w3.org/2000/svg">
          <g fill='#fff'>
            <text x="83.533px" y="363.666px" style={{ fontFamily: 'Nanum Myeongjo', fontSize: '300px' }}>삼겹살</text>
            <g fillOpacity={0}>
              <path d="M1024,49.072l-49.072,-49.072l-925.856,0l-49.072,49.072l0,413.856l49.072,49.072l925.856,0l49.072,-49.072l-0,-413.856Z" />
            </g>
            <path d="M1024,49.072l-49.072,-49.072l-925.856,0l-49.072,49.072l0,413.856l49.072,49.072l925.856,0l49.072,-49.072l-0,-413.856Zm-20.833,8.629l-0,396.598c-0,-0 -36.868,36.868 -36.868,36.868c-0,-0 -908.598,-0 -908.598,-0c0,-0 -36.868,-36.868 -36.868,-36.868c0,-0 0,-396.598 0,-396.598c0,0 36.868,-36.868 36.868,-36.868c0,0 908.598,0 908.598,0l36.868,36.868Z" />
          </g>
        </svg>
      </span>
      <span className='w-full text-right text-xs'>by Diem-Mi Nguyen</span>
    </div>
  );
}

export default Footer;