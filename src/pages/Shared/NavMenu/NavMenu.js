import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const NavMenu = () => {



    return (
        <>
            <Navbar style={{ backgroundColor: "#f1f2f6" }} collapseOnSelect sticky="top" expand="lg" variant="light" className="shadow-sm">
                <Container>
                    <Navbar.Brand href="#home">Super car shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#banner">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#review">Review</Nav.Link>
                            <Nav.Link as={HashLink} to="/">Contact</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/"> Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;













