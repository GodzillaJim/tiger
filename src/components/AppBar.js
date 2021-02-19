import React, { useState } from 'react';
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

  const onClick = () => {
    setCollapse(!collapse);
  };
  return (
    <div>
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
                style={{ top: '75px', display: 'block' }}
              >
                <MDBCardBody>
                  <h1 className='mb-15 h1-responsive font-weight-bold my-auto mt-sm-5'>
                    <span>
                      Discover my Amazing
                      <br /> Art Space!
                    </span>
                  </h1>
                  <div className='text-warning my-5 h4'>
                    &lt;<i>code</i>&gt;
                    <span className='text-light'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus esse commodi deserunt vitae, vero quasi! Veniam
                      quaerat tenetur pariatur doloribus.
                    </span>
                    &lt;&#47;<i>code</i> &gt;
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
