import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="bg-light mt-14 rounded-top">
      <Container>
        <Row className="py-5">
          {/* Company Details */}
          <Col md={4} className="py-4">
            <Typography variant="h4" component="h1" className="font-serif mb-3">
              Freengo
            </Typography>
            <div className="d-flex align-items-center mb-2">
              <FaLocationArrow className="me-2" />
              <Typography variant="body1">Melen, Yaounde</Typography>
            </div>
            <div className="d-flex align-items-center">
              <FaMobileAlt className="me-2" />
              <Typography variant="body1">+237 6 53 98 19 59</Typography>
            </div>
          </Col>

          {/* Links */}
          <Col md={8} className="d-flex flex-wrap">
            <Col sm={4} className="py-4">
              <Typography variant="h6" className="mb-3">
                Important Links
              </Typography>
              <List>
                {FooterLinks.map((link, index) => (
                  <ListItem button component="a" key={index} href={link.link}>
                    <ListItemText primary={link.title} />
                  </ListItem>
                ))}
              </List>
            </Col>
            <Col sm={4} className="py-4">
              <Typography variant="h6" className="mb-3">
                Links
              </Typography>
              <List>
                {FooterLinks.map((link, index) => (
                  <ListItem button component="a" key={index} href={link.link}>
                    <ListItemText primary={link.title} />
                  </ListItem>
                ))}
              </List>
            </Col>
            <Col sm={4} className="py-4">
              <Typography variant="h6" className="mb-3">
                Location
              </Typography>
              <List>
                {FooterLinks.map((link, index) => (
                  <ListItem button component="a" key={index} href={link.link}>
                    <ListItemText primary={link.title} />
                  </ListItem>
                ))}
              </List>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
