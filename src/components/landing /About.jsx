import React from "react";
import CarPng from "../../assets/assets/car1.png";
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className="bg-light dark:bg-dark min-vh-100 d-flex align-items-center transition duration-300">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt="Car"
              className="img-fluid"
              style={{ transform: 'scale(1.25)', maxHeight: '300px', boxShadow: '2px 10px 6px rgba(0, 0, 0, 0.50)' }}
            />
          </Col>
          <Col md={6}>
            <div className="p-4 p-md-5">
              <h1 data-aos="fade-up" className="display-4 font-serif">
                About us
              </h1>
              <p data-aos="fade-up" className="lead">
                Freengo c'est une plateforme qui permet d'assurer le deplacement des individus et des biens dans la ville de Yaounde et au-dela,
                il s'agit 
              </p>
              <Button
                data-aos="fade-up"
                variant="outline-primary"
                className="mt-3"
              >
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
