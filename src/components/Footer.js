import React from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='http://jimna.dx.am'>GodzillaJim</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
