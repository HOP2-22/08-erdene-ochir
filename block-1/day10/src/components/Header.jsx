import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import tteeaamm from "../image/team.png";
import { Link } from "react-router-dom";
export const NavigationBar = ({ color, ccolor }) => {
  console.log(color, ccolor);
  return (
    <Navbar
      style={{
        backgroundColor: color,
        width: "100vw",
        color: ccolor,
      }}
    >
      <Container>
        <Navbar.Brand
          className="logo"
          style={{
            color: ccolor,
          }}
        >
          team
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navb navbb">
              <Link
                className="na"
                to={"products"}
                style={{
                  color: ccolor,
                }}
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link className="navbb">
              <Link
                className="na"
                to={"Services"}
                style={{
                  color: ccolor,
                }}
              >
                Services
              </Link>
            </Nav.Link>
            <Nav.Link className="navbb">
              <Link
                className="na"
                to={"Contact"}
                style={{
                  color: ccolor,
                }}
              >
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link className="navbb">
              <Link
                className="na"
                to={"Login"}
                style={{
                  color: ccolor,
                }}
              >
                Login
              </Link>
            </Nav.Link>
            <button className="navbut">
              <Link
                className="navbutt"
                to={"Get Access"}
                style={{
                  color: ccolor,
                }}
              >
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
