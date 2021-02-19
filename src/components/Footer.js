import React from 'react';

const Footer = () => {
  return (
    <footer
      className='text-center footer mx-auto p-3 fixed-bottom'
      style={{
        bottom: '0px',
        position: 'fixed',
        height: '60px',
        width: '100%',
      }}
    >
      <span className='mx-auto my-auto'>
        @{new Date().getFullYear()} GodzillaJim
      </span>
    </footer>
  );
};

export default Footer;
