import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const Loading = () => {
  return (
    <div>
      <div className='m-2'>
        <svg
          xmlnsSvg='http://www.w3.org/2000/svg'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.0'
          width='75px'
          height='75px'
          viewBox='0 0 128 128'
          xmlSpace='preserve'
        >
          <script
            type='text/ecmascript'
            xlinkHref='//faviconer.net/jscripts/smil.user.js'
          />
          <g>
            <path
              fill='#f39c12'
              fillOpacity='1'
              d='M116.7 66.28a52.86 52.86 0 0 1-1 8.18l9.8 7.57-1.78 4.67-1.77 4.67-12.36-.82a52.87 52.87 0 0 1-4.7 6.7L110 108.5l-3.75 3.3-3.75 3.32L92 108.67a52.6 52.6 0 0 1-7.45 3.9l-.66 12.3-4.87 1.2-4.86 1.2-6.38-10.66q-1.9.2-3.88.2-2.15 0-4.25-.14l-6.3 10.64-4.84-1.2-4.85-1.2-.7-12.43a52.6 52.6 0 0 1-6.7-3.5l-10.6 6.64-3.75-3.3-3.76-3.3 5.05-11.4a52.88 52.88 0 0 1-4.73-6.73l-12.34.9-1.8-4.66-1.8-4.67 9.7-7.67a52.8 52.8 0 0 1-1-8.05l-11.4-5 .56-4.95.54-4.97 12.26-2.3a52.37 52.37 0 0 1 2.94-7.83L8.4 32l2.8-4.14 2.8-4.14 12 3.68a53.06 53.06 0 0 1 6-5.33L29.57 9.8l4.4-2.37 4.43-2.35 8.95 8.86a52.4 52.4 0 0 1 8-1.98L59 0h10l3.66 11.96a52.4 52.4 0 0 1 7.8 1.9L89.26 5l4.42 2.3 4.43 2.34-2.3 12.27a52.98 52.98 0 0 1 6.2 5.5l11.9-3.7 2.9 4.1 2.84 4.1-7.8 9.8a52.34 52.34 0 0 1 2.86 7.5l12.3 2.17.6 4.96.57 4.95zM41 64a23 23 0 1 0 23-23 23 23 0 0 0-23 23z'
            />
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 64 64'
              to='27.69 64 64'
              dur='500ms'
              repeatCount='indefinite'
            ></animateTransform>
          </g>
        </svg>
      </div>
      <div className='text-warning text-center h4'>
        <TypeWriterEffect
          className='text-warning text-center'
          textStyle={{
            fontFamily: 'Lucida sans typewriter',
            fontWeight: 500,
            fontSize: '1.5em',
            textAlign: 'center'
          }}
          startDelay={1000}
          cursorColor='#3F3D56'
          multiText={['One moment...', 'un momento...', '稍等一会儿']}
          multiTextDelay={1500}
          typeSpeed={100}
        />
      </div>
    </div>
  );
};

export default Loading;
