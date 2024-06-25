import React, { useEffect } from "react";
import carPng from "../../../assets/assets/car.png";
import yellowCar from "../../../assets/assets/banner-car.png";
import AOS from "aos";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className={`bg-${theme === 'dark' ? 'dark' : 'white'} text-${theme === 'dark' ? 'white' : 'black'} transition duration-300`}>
      <Container className="min-vh-100 d-flex align-items-center">
        <Row className="w-100">
          <Col md={{ span: 6, order: 2 }} className="d-flex justify-content-center align-items-center">
            <div data-aos="zoom-in" data-aos-duration="1500">
              <img
                src={theme === "dark" ? carPng : yellowCar}
                alt="Car"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-center align-items-start">
            <p data-aos="fade-up" className="text-primary h4 font-serif">
              Votre application de transport...
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="display-3 font-serif"
            >
              Freengo
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="lead">
              Deplacez vous en toute securite et en toute fiabilite grace a notre application.
            </p>
            <Button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="mt-3 btn-primary"
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
