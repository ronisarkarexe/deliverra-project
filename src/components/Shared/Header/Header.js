import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div className="fixed-top header-background">
         <div className="container">
         <Navbar className="mt-2" >
            <Navbar.Brand as={Link} className="navbar-icon" to="/">Deliverra</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link as={Link} className="me-4 text-had-color" to="/home">Home</Nav.Link>
                  <Nav.Link as={Link} className="me-4 text-had-color" href="#link">About</Nav.Link>
                  <Nav.Link as={Link} className="me-4 text-had-color" to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={Link} className="me-4 text-had-color" to="/admin">Admin</Nav.Link>
                  <Nav.Link as={Link} className="me-4 text-had-color" to="/contact">Contact Us</Nav.Link>
                  <Button as={Link} className="ms-5">Login</Button>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         </div>
      </div>
   );
};

export default Header;