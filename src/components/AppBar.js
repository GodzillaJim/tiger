import React, { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { CircularProgressBar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Line } from "rc-progress";
import { NavHashLink as Link } from "react-router-hash-link";
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
} from "mdbreact";
import SocialMediaButtons from "react-social-media-buttons";
import { BrowserRouter as Router } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { Button, Card, Row, Col, ProgressBar } from "react-bootstrap";
import passport from "../passport.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const AppBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);
  const [open, setOpen] = useState(true);
  const [typeWriterStrings, setTypewriterStrings] = useState([
    "I build and manage websites.",
    "I build design mockups.",
    "I build Android apps.",
    "I build desktop applications",
    "I automate tests for JavaScript applications.",
    "I manage software development projects.",
  ]);

  const onClick = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="col-12">
      <header>
        <Router>
          <Drawer
            PaperProps={{
              className: "bg-dark",
            }}
            variant="temporary"
            anchor="left"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            className="p-1"
            open={open}
          >
            <Button variant="link" size="lg" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Divider />
            <Card className="p-2" style={{ width: "250px" }}>
              <Card.Img
                className="mx-auto rounded-circle"
                style={{ width: "100px" }}
                src={passport}
              />
              <Card.Body className="text-center">
                <h5 className="text-white">Jimna Njoroge</h5>
                <span className="text-light">FullStack Developer</span>
              </Card.Body>
            </Card>
            <Card id="language">
              <Card.Body>
                <Row>
                  <Col>
                    <Row>
                      <div style={{ width: 50, height: 50 }}>
                        <CircularProgressbar
                          styles={buildStyles({
                            pathColor: "#f39c12",
                            textColor: "#8eb5bd",
                          })}
                          value={100}
                          text={"100"}
                        />
                      </div>
                    </Row>
                    <Row>
                      <span className="text-center text-light">English</span>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <div style={{ width: 50, height: 50 }}>
                        <CircularProgressbar
                          styles={buildStyles({
                            pathColor: "#f39c12",
                            textColor: "#8eb5bd",
                          })}
                          value={95}
                          text="95"
                        />
                      </div>
                    </Row>
                    <Row>
                      <span className="text-center text-light">Swahili</span>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <div style={{ width: 50, height: 50 }}>
                        <CircularProgressbar
                          styles={buildStyles({
                            pathColor: "#f39c12",
                            textColor: "#8eb5bd",
                          })}
                          value={40}
                          text={"40"}
                        />
                      </div>
                    </Row>
                    <Row>
                      <span className="text-center text-light">Mandarin</span>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card id="programming">
              <Card.Body className="text-light">
                <div className="m-1">
                  <Row>
                    <Col>
                      <div className="mr-auto">ReactJS</div>
                    </Col>
                    <Col>
                      <div className="float-right">95%</div>
                    </Col>
                  </Row>
                  <Line percent="95" strokeWidth="1" strokeColor="#f39c12" />
                </div>
                <div className="m-1">
                  <Row>
                    <Col>
                      <div className="mr-auto">NodeJS</div>
                    </Col>
                    <Col>
                      <div className="float-right">90%</div>
                    </Col>
                  </Row>
                  <Line percent="90" strokeWidth="1" strokeColor="#f39c12" />
                </div>
                <div className="m-1">
                  <Row>
                    <Col>
                      <div className="mr-auto">Java</div>
                    </Col>
                    <Col>
                      <div className="float-right">65%</div>
                    </Col>
                  </Row>
                  <Line percent="65" strokeWidth="1" strokeColor="#f39c12" />
                </div>
              </Card.Body>
            </Card>
            <Card id="download-cv">
              <Card.Body className="d-flex justify-content-center">
                <Button
                  className="mx-auto text-dark"
                  variant="warning"
                  onClick={() => window.open("/docs/my_resume.pdf")}
                >
                  Download CV
                </Button>
              </Card.Body>
            </Card>
            <Card id="social-media-icons">
              <Row>
                <Col>
                  <Button
                    variant="link"
                    className="text-light"
                    onClick={() =>
                      window.open("https://github.com/godzillajim")
                    }
                  >
                    <i className="fab fa-github text-warning"></i>
                  </Button>
                </Col>
                <Col>
                  <Button variant="link" className="text-light">
                    <i className="fab fa-linkedin text-warning"></i>
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="link"
                    className="text-light"
                    onClick={() =>
                      window.open("https://twitter.com/Sir_TerryJones")
                    }
                  >
                    <i className="fab fa-twitter text-warning"></i>
                  </Button>
                </Col>
              </Row>
            </Card>
          </Drawer>
          <MDBNavbar
            color="bg-primary"
            fixed="top"
            dark
            expand="md"
            scrolling
            transparent
          >
            {!open && (
              <MDBNavbarBrand>
                <Button
                  variant="link"
                  className="text-light"
                  onClick={() => setOpen(true)}
                >
                  <i className="text-light fas fa-bars"></i>
                </Button>
              </MDBNavbarBrand>
            )}
            {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem className="m-2">
                  <Link
                    className="hover-white"
                    activeClassName="selected"
                    smooth
                    to={"/#home"}
                  >
                    Home
                  </Link>
                </MDBNavItem>
                {/* <MDBNavItem className='m-2'>
                  <Link
                    className='hover-white disabled'
                    activeClassName='selected'
                    smooth
                    to={'/#portfolio'}
                    disabled
                  >
                    Portfolio
                  </Link>
                </MDBNavItem>
                <MDBNavItem className='m-2'>
                  <Link
                    className='hover-white disabled'
                    activeClassName='selected'
                    smooth
                    to={'/#blog'}
                    disabled
                  >
                    Blog
                  </Link>
                </MDBNavItem> */}
                <MDBNavItem className="m-2">
                  <Link
                    className="hover-white"
                    activeClassName="selected"
                    smooth
                    to={"/#services"}
                  >
                    Services
                  </Link>
                </MDBNavItem>
                <MDBNavItem className="m-2">
                  <Link
                    className="hover-white"
                    activeClassName="selected"
                    smooth
                    to={"/#contact"}
                  >
                    Contact
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
        <MDBView>
          <MDBMask
            overlay="red-strong"
            className="flex-center Sflex-column text-center text-gold"
            pattern={8}
          >
            <MDBAnimation type="fadeInLeft" delay=".3s">
              <MDBCard
                id="classic-card mb-4"
                className="w-100"
                style={{ top: "75px", display: "block", width: "100%" }}
              >
                <MDBCardBody className="p-1" id="home">
                  <h1 className="mb-15 h1-responsive font-weight-bold my-auto mt-sm-5">
                    <span>
                      Discover my Amazing
                      <br /> Art Space!
                    </span>
                  </h1>
                  <div className="text-warning my-5 row h4 p-0 justify-content-center">
                    <div className="col-auto px-0 mt-1">
                      &lt;<i>code</i>&gt;
                    </div>
                    <span
                      className="text-light px-0 col-auto text-center"
                      id="typewriter"
                    >
                      <TypeWriterEffect
                        className="text-center"
                        textStyle={{
                          fontFamily: "Red Hat Display",
                          color: "white",
                          fontWeight: 500,
                          fontSize: "1.5em",
                        }}
                        startDelay={2000}
                        cursorColor="#ffd700"
                        multiText={typeWriterStrings}
                        multiTextDelay={1000}
                        typeSpeed={30}
                      />
                    </span>
                    <div className="col-auto px-0 mt-1">
                      &lt;&#47;<i>code</i> &gt;
                    </div>
                  </div>
                  <div className="mx-auto my-5">
                    <MDBBtn
                      className="btn text-dark"
                      size="lg"
                      href="/#services"
                      color="warning"
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
