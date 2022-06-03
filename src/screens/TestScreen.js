import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardDeck,
  Modal,
  Image,
} from "react-bootstrap";
import { projects } from "../data/data";

const TestScreen = () => {
  const [signsay, setSignsay] = useState(false);
  const [pigeon, setPigeon] = useState(false);
  const [spursoft, setSpursoft] = useState(false);
  const getShow = (title) => {
    switch (title) {
      case "signsay":
        return signsay;
      case "pigeon":
        return pigeon;
      case "spursoft":
        return spursoft;
      default:
        break;
    }
  };
  const handleHide = () => {
    setSignsay(false);
    setPigeon(false);
    setSpursoft(false);
  };
  const handleShow = (e) => {
    switch (e.target.id.split(".")[0]) {
      case "signsay":
        return setSignsay(true);
      case "pigeon":
        return setPigeon(true);
      case "spursoft":
        return setSpursoft(true);
      default:
        break;
    }
  };
  return (
    <Container>
      <Row>
        <CardDeck>
          {projects.map((project) => (
            <Card
              style={{ fontFamily: "alternate gothic" }}
              key={JSON.stringify(project.datePublished)}
            >
              <Card.Img src={project.image} as={Image} fluid />
              <Card.Body className="text-center">
                <h5 className="text-center text-light">
                  {project.name.toUpperCase()}
                </h5>
                <span className="text-danger">
                  {project.stack.map((tech) => (
                    <small key={tech} className="m-2">
                      {tech}
                    </small>
                  ))}
                </span>
                <p className="text-justify">
                  {project.description.substring(0, 300) + "..."}
                  <Button
                    variant="link"
                    id={project.title + ".link"}
                    onClick={handleShow}
                  >
                    Read more
                  </Button>
                </p>
                <Modal
                  show={getShow(project.title)}
                  id={project.title}
                  onHide={handleHide}
                  centered
                  size="lg"
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <Card
                      style={{ fontFamily: "alternate gothic" }}
                      key={JSON.stringify(project.datePublished)}
                    >
                      <Card.Img src={project.image} as={Image} fluid />
                      <Card.Body className="text-center">
                        <h5 className="text-center text-light">
                          {project.name.toUpperCase()}
                        </h5>
                        <span className="text-danger">
                          {project.stack.map((tech) => (
                            <small key={tech} className="m-2">
                              {tech}
                            </small>
                          ))}
                        </span>
                        <p className="text-justify">{project.description}</p>{" "}
                      </Card.Body>
                      <Card.Text as={"div"}>
                        <Row className="mx-auto">
                          <Col className="text-center">
                            <Button
                              variant="link"
                              className="mx-auto"
                              href={project.github}
                            >
                              <i className="fab fa-github"></i>
                            </Button>
                          </Col>
                          <Col className="text-center">
                            <Button variant="link" href={project.link}>
                              <i className="fas fa-link"></i>
                            </Button>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card>
                  </Modal.Body>
                </Modal>
              </Card.Body>
              <Card.Text as={"div"}>
                <Row className="mx-auto">
                  <Col className="text-center">
                    <Button
                      variant="link"
                      className="mx-auto"
                      href={project.github}
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                  </Col>
                  <Col className="text-center">
                    <Button variant="link" href={project.link}>
                      <i className="fas fa-link"></i>
                    </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card>
          ))}
        </CardDeck>
      </Row>
    </Container>
  );
};

const ViewProject = ({ project, show }) => {
  return (
    <Modal show centered size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
};
export default TestScreen;
