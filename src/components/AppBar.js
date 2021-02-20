import React, { useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBChip,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const AppBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);
  const [typeWriterStrings, setTypewriterStrings] = useState([
    'I build and manage websites.',
    'I build design mockups.',
    'I build Android apps.',
    'I build desktop applications',
    'I automate tests for JavaScript applications.',
    'I manage software development projects.',
  ]);

  const onClick = () => {
    setCollapse(!collapse);
  };
  return (
    <div className='col-12'>
      <header>
        <Router>
          <MDBNavbar
            color='bg-primary'
            fixed='top'
            dark
            expand='md'
            scrolling
            transparent
          >
            {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink to='/'>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/services'>Service</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/about'>About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/portfolio'>Portfolio</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/contact'>Contact</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
        <MDBView>
          <MDBMask
            overlay='red-strong'
            className='flex-center flex-column text-center text-gold mx-3'
            pattern={8}
          >
            <MDBAnimation type='fadeInLeft' delay='.3s'>
              <MDBCard
                id='classic-card mb-4'
                className='w-100'
                style={{ top: '75px', display: 'block', width: '100%' }}
              >
                <MDBCardBody>
                  <h1 className='mb-15 h1-responsive font-weight-bold my-auto mt-sm-5'>
                    <span>
                      Discover my Amazing
                      <br /> Art Space!
                    </span>
                  </h1>
                  <div className='text-warning my-5 row h4 p-0 justify-content-center'>
                    <div className='col-auto px-0 mt-1'>
                      &lt;<i>code</i>&gt;
                    </div>
                    <span className='text-light px-0 col-auto' id='typewriter'>
                      <TypeWriterEffect
                        textStyle={{
                          fontFamily: 'Red Hat Display',
                          color: 'white',
                          fontWeight: 500,
                          fontSize: '1.5em',
                        }}
                        startDelay={2000}
                        cursorColor='#ffd700'
                        multiText={typeWriterStrings}
                        multiTextDelay={1000}
                        typeSpeed={30}
                      />
                    </span>
                    <div className='col-auto px-0 mt-1'>
                      &lt;&#47;<i>code</i> &gt;
                    </div>
                  </div>
                  <div className='mx-auto my-5'>
                    <MDBBtn
                      className='btn text-dark'
                      size='lg'
                      href='/portfolio'
                      color='warning'
                    >
                      Explore
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBMask>
        </MDBView>
      </header>
    </div>
  );
};

export default AppBar;
