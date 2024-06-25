import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const skillsData = [
  {
    name: "Chauffeur",
    icon: <GiNotebook style={{ fontSize: "2.5rem", color: "var(--primary)" }} />,
    link: "#",
    description: "Vous etes chauffeur, vous avez une voiture, inscrivez vous sur notre plateforme",
    aosDelay: "500",
  },
  {
    name: "Client",
    icon: <SlNote style={{ fontSize: "2.5rem", color: "var(--primary)" }} />,
    link: "#",
    description: "Vous vivez a Yaounde, vous voulez vous deplacer, utilisez notre application",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-light dark:bg-dark text-black dark:text-white py-5 min-vh-100 d-flex align-items-center">
        <Container>
          <div className="text-center pb-5">
            <h1 data-aos="fade-up" className="display-4 font-serif">
              Qui etes vous ?
            </h1>
          </div>
          <Row className="g-4">
            {skillsData.map((skill) => (
              <Col key={skill.name} xs={12} sm={6} md={4}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={skill.aosDelay}
                  className="text-center h-100"
                  bg="dark"
                  text="white"
                >
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <div className="mb-3">{skill.icon}</div>
                    <Card.Title className="mb-2">{skill.name}</Card.Title>
                    <Card.Text>{skill.description}</Card.Text>
                    <Button variant="outline-light" className="mt-auto">
                      Commencez
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
