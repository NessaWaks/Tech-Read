import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Tech-Reader</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
          <Nav.Link to="/service" as={Link}>Service</Nav.Link>
          <Nav.Link to="/training" as={Link}>Training</Nav.Link>
          <Nav.Link to="/blog" as={Link}>Blog</Nav.Link>
          <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
          <Nav.Link to="/about" as={Link}>About</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item to="/Download" as={Link}>Download</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              News
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Events
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}

export default NavigationBar