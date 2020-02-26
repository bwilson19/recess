import React from 'react';
import './Footer.css';
import { Navbar, Container } from 'react-bootstrap';

function Footer(props) {
  

  return (
    <>
      <Navbar id="footer" expand="lg" variant="light" bg="light" sticky="bottom">
        <Container>
          <Navbar.Brand href="#">Footer</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
