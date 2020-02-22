import React, { useState } from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import LoginModal from '../Modals/LoginModal/LoginModal';

function Header(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        variant="dark"
        id="navBar"
      >
        <Navbar.Brand href="/">
          <img src="/images/icon.png" alt="Recess" id="logo" width="50px" />
        </Navbar.Brand>
        <Navbar.Brand href="/" id="recessName">
          Recess
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav align="center" id="navbarLogin">
            <Nav.Link onClick={() => setModalShow(true)}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;
