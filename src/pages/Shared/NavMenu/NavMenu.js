import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const NavMenu = () => {



    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

// const linkStyle = {
//     textDecoration: 'none',
//     color: 'white',

// }

export default NavMenu;













