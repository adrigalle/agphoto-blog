import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './nav.module.css';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";


export default function NavBar() {
    return (
        <Navbar className={ styles.stickyNav } bg="blurry" expand="lg">

          <Container fluid className={ styles.blur }>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav fill className=" flex-grow-1 justify-content-center">

                  <Nav.Link className={ styles.navLinks } href="/">HOME</Nav.Link>
                  <Nav.Link className={ styles.navLinks } href="/about">ABOUT</Nav.Link>
                  <Nav.Link className={ styles.navLinks } href="/services">SERVICES</Nav.Link>
                  <Nav.Link className={ styles.navLinks } href="/gallery">GALLERY</Nav.Link>
                  <Nav.Link className={ styles.navLinks } href="/faqs">FAQ's</Nav.Link>
                  <Nav.Link className={ styles.navLinks } href="/contact">CONTACT</Nav.Link>

                </Nav>

              </Navbar.Collapse>

          </Container>

        </Navbar>
      );
}