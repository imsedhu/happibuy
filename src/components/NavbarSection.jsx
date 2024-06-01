import React from 'react'
import { Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const NavbarSection = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="header-section style-4">
      <Container>
        <img src="/favicon.ico" alt="happibuy" width={60} className='me-0' />
        <Navbar.Brand href="#home" className='me-auto fw-bold fst-italic  fs-2 text-primary'>HAPPIBUY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className='me-4 fw-medium  text-black fs-5 px-3   '>Home</NavLink>
            <NavLink to="/shop" className='me-4 fw-medium  text-black fs-5  px-3 '>Shop</NavLink>
            <NavLink to="/blog" className='me-4 fw-medium  text-black fs-5 px-3 '>Blog</NavLink>
            <NavLink to="/contact" className='me-4 fw-medium  text-black fs-5 px-3 '>Contact</NavLink>
            <NavLink to="/about"className='me-4 fw-medium  text-black  fs-5 px-3 '>About</NavLink>
          </Nav>
          <Button className='btn-warning   me-4 fw-medium fs-5     '>Signup</Button>
          <button className='btn btn-outline-success   me-2 fw-medium fs-5  '>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarSection