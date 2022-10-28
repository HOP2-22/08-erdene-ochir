import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="logo">team</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navb navbb">
              <Link className="na" to={"products"}>
                Products
              </Link>
            </Nav.Link>
            <Nav.Link className="navbb">
              <Link className="na" to={"Services"}>
                Services
              </Link>
            </Nav.Link>
            <Nav.Link className="navbb">
              <Link className="na" to={"Contact"}>
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link className="navbb">
              <Link className="na" to={"Login"}>
                Login
              </Link>
            </Nav.Link>
            <button className="navbut">
              <Link className="na" to={"Get Access"}>
                Get Access
              </Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
