import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HOME_ROUTE, RESULT_ROUTE } from '../../constants/constants';

const NavbarContainer = () => {
  return (
    <Navbar bg='dark' expand='sm' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>React-Dictionary</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to={HOME_ROUTE}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={RESULT_ROUTE}>
              Result
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
