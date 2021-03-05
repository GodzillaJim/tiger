import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import AppBar from '../components/AppBar.js';
import { MDBCard, MDBCardTitle, MDBCardBody, MDBInput } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        color: '#838f9b',
        '&$focused': { color: '#adb5bd', borderColor: '#b06f09' },
        '& .MuiFilledInput-underline:after': {
          border: '2px solid #b06f09',
        },
      },
    },
  },
});

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <Container className='home'>
      <AppBar />
      <Drawer variant='temporary' open ={true}>Test</Drawer>
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
                <h5
                  className={
                    window.innerWidth > 768
                      ? 'text-light pl-0 ml-0 text-left mt-2'
                      : 'text-light text-center'
                  }
                >
                  Years of Experience
                </h5>
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
          <h3 className='text-info row m-3'>What I do</h3>
          <div className='row'>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='my-2 p-3 h-100'>
                  <MDBCardTitle className='text-center text-light my-auto p-2'>
                    PROGRAMMER
                  </MDBCardTitle>
                  <MDBCardBody className='p-2 text-light'>
                    Developing an app and need a programmer in your team to
                    write{' '}
                    <span className='text-danger font-weight-bold'> PHP</span>{' '}
                    or JS code, and it’s{' '}
                    <span className='text-danger font-weight-bold'>
                      {' '}
                      VanillaJS
                    </span>{' '}
                    or{' '}
                    <span className='text-danger font-weight-bold'>
                      {' '}
                      ReactJS
                    </span>{' '}
                    and some nodeJS? Or it’s a{' '}
                    <span className='text-danger font-weight-bold'>
                      {' '}
                      Java
                    </span>{' '}
                    app with{' '}
                    <span className='text-danger font-weight-bold'>
                      {' '}
                      Spring
                    </span>{' '}
                    Framework. I’m your guy.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='my-2 p-3 h-100'>
                  <MDBCardTitle className='text-center text-light my-auto p-2'>
                    PROJECT MANAGER
                  </MDBCardTitle>
                  <MDBCardBody className='p-2 text-light'>
                    We all know what a headache managing a project can be and I
                    know just how to make that lemonade. Let me take that
                    project off your hands and give you results promptly.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='my-2 p-3 h-100'>
                  <MDBCardTitle className='text-center text-light my-auto p-2'>
                    WEB DEVELOPER
                  </MDBCardTitle>
                  <MDBCardBody className='p-2 text-light'>
                    Order your application right now. Is it a blog, a business
                    portfolio, or a bespoke app with specific requirements?
                    Anything goes if it runs on the web, just say the word.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
            </Row>
            <Row className='my-2'>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='my-2 p-3 text-light h-100'>
                  <MDBCardTitle className='text-center my-auto text-light p-2'>
                    DEPLOYMENT
                  </MDBCardTitle>
                  <MDBCardBody className='p-2 text-light'>
                    Every developer’s nightmare. I know because I’ve done it
                    countless times on{' '}
                    <span className='text-danger font-weight-bold'> AWS</span>,
                    <span className='text-danger font-weight-bold'> Azure</span>
                    ,
                    <span className='text-danger font-weight-bold'>
                      {' '}
                      Heroku
                    </span>
                    ,
                    <span className='text-danger font-weight-bold'>
                      DigitalOcean
                    </span>
                    ,
                    <span className='text-danger font-weight-bold'>
                      {' '}
                      Google
                    </span>
                    , you name it. Don’t second guess, when you can be certain
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='my-2 p-3 h-100'>
                  <MDBCardTitle className='text-center text-light my-auto p-2'>
                    DATABASE ADMIN
                  </MDBCardTitle>
                  <MDBCardBody className='p-2 text-light'>
                    <span className='text-danger font-weight-bold'>
                      {' '}
                      MongoDB
                    </span>
                    ,{' '}
                    <span className='text-danger font-weight-bold'>
                      {' '}
                      MySQL
                    </span>{' '}
                    ? Is it on cloud hosted or local? You want to create, manage
                    or just back-up? It doesn’t matter, you want your data
                    available and in order, I can ensure that.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <MDBCard className='my-2 p-3 h-100'>
                  <MDBCardTitle className='text-center text-light my-auto p-3'>
                    WORDPRESS, JOOMLA
                  </MDBCardTitle>
                  <MDBCardBody className='p-2 text-light'>
                    Your site is on WordPress, or Joomla and you want it
                    managed. You also want to add a feature to the site. I do
                    this all the time. <br />
                    Hit me up.
                  </MDBCardBody>
                  <div className='text-right'>
                    <Button variant={'link'}>Holla</Button>
                  </div>
                </MDBCard>
              </Col>
            </Row>
          </div>
        </section>
        <section id='contact' className='m-3'>
          <h3 className='text-info row m-3'>Get in touch.</h3>
          <Card>
            <Card.Body className='mx-auto'>
              <Form onSubmit={handleForm} className='text-light'>
                <Container>
                  <Row>
                    <Col lg={6} md={6} sm={12}>
                      <ThemeProvider theme={theme}>
                        <TextField
                          value={name}
                          className='m-3 textfield'
                          variant='filled'
                          name='name'
                          id='name'
                          type='text'
                          label='Your Name'
                          InputProps={{
                            className: 'textfield',
                          }}
                          color='light'
                          onChange={(e) => setName(e.target.value)}
                        />
                      </ThemeProvider>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <TextField
                        value={email}
                        className='m-3'
                        variant='filled'
                        name='email'
                        id='email'
                        type='email'
                        label='Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} sm={12}>
                      <TextField
                        value={subject}
                        fullWidth
                        className='m-3'
                        variant='filled'
                        name='subject'
                        id='subject'
                        label={'Subject'}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <MDBInput
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        labelClass='m-3'
                        className='text-light m-3'
                        type='textarea'
                        placeholder='Your Message'
                        label='Your Message'
                        rows='5'
                        style={{ backgroundColor: '#2c2c2c', color: '#838f9b' }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button className='m-3' variant='primary' type='submit'>
                        <i className='text-light fa fas-envelope px-2'></i>
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </section>
      </main>
    </Container>
  );
};

export default HomeScreen;
