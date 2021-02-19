import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AppBar from '../components/AppBar.js';
import Programmer from '../images/programmer.png';
import { MDBCard, MDBCardTitle, MDBCardBody, MDBCardGroup } from 'mdbreact';

const HomeScreen = () => {
  return (
    <Container className='home'>
      <Row>
        <AppBar />
      </Row>
      <main className={'inline col mt-4'} style={{ top: '75px' }}>
        <Row>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Row>
              <Col lg={4} md={4} sm={12} className={'p-0'}>
                <h3
                  className={
                    window.innerWidth > 768
                      ? 'text-warning text-right pl-0 ml-0'
                      : 'text-warning text-center'
                  }
                >
                  3+
                </h3>
              </Col>
              <Col lg={8} md={8} sm={12} className='pl-2'>
                <h4
                  className={
                    window.innerWidth > 768
                      ? 'text-light pl-0 ml-0 text-left mt-2'
                      : 'text-light text-center'
                  }
                >
                  Years of Experience
                </h4>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Row>
              <Col lg={4} md={4} sm={12} className={'p-0'}>
                <h3
                  className={
                    window.innerWidth > 768
                      ? 'text-warning text-right pl-0 ml-0'
                      : 'text-warning text-center'
                  }
                >
                  6+
                </h3>
              </Col>
              <Col lg={8} md={8} sm={12} className='pl-2'>
                <h4
                  className={
                    window.innerWidth > 768
                      ? 'text-light pl-0 ml-0 text-left mt-2'
                      : 'text-light text-center'
                  }
                >
                  Completed Projects
                </h4>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Row>
              <Col lg={4} md={4} sm={12} className={'p-0'}>
                <h3 className={'text-warning text-right pl-0 ml-0'}>12+</h3>
              </Col>
              <Col lg={8} md={8} sm={12} className='pl-2'>
                <h4
                  className={
                    window.innerWidth > 768
                      ? 'text-light pl-0 ml-0 text-left mt-2'
                      : 'text-light text-center'
                  }
                >
                  Collaborations
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <section id='services' className='row my-2'>
          <h3 className='text-info row m-3'>What I can do</h3>
          <div className='row'>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='m-2'>
                  <MDBCardTitle className='text-center my-auto pt-2'>
                    Programming
                  </MDBCardTitle>
                  <MDBCardBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <MDBCard
                  className='m-2 card-image'
                  style={{ backgroundImage: `url(${Programmer})` }}
                >
                  <div className='ter d-flex align-items-center rgba-black-strong'>
                    <MDBCardTitle className='text-center my-auto pt-2'>
                      Programming
                    </MDBCardTitle>
                    <MDBCardBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus esse commodi deserunt vitae, vero quasi! Veniam
                      quaerat tenetur pariatur doloribus.
                    </MDBCardBody>
                    <div className='text-right'>
                      <Button variant={'link'}>Holla</Button>
                    </div>
                  </div>
                </MDBCard>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='m-2'>
                  <MDBCardTitle className='text-center pt-2'>
                    Web Application
                  </MDBCardTitle>
                  <MDBCardBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='m-2'>
                  <MDBCardTitle className='text-center pt-2'>
                    Deployment
                  </MDBCardTitle>
                  <MDBCardBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='m-2'>
                  <MDBCardTitle className='text-center my-auto pt-2'>
                    Databases
                  </MDBCardTitle>
                  <MDBCardBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='m-2'>
                  <MDBCardTitle className='text-center my-auto pt-2'>
                    Wordpress, Joomla, Drupal
                  </MDBCardTitle>
                  <MDBCardBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus esse commodi deserunt vitae, vero quasi! Veniam
                    quaerat tenetur pariatur doloribus.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default HomeScreen;
