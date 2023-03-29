import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="navigation" collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Sofia, sans-serif",
            fontSize: "50px",
            overflow: "visible",
            position: "relative",
          }}
          as={Link}
          to="/home"
        >
          Lola Kasimova
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto "
            style={{
              fontFamily: "Sofia, sans-serif",
              fontSize: "30px",
            }}
          >
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
