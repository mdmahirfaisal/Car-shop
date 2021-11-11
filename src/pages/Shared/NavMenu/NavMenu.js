import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './img/logo.png';


const NavMenu = () => {
    const [isSticky, setSticky] = React.useState(false);
    const [isCollapsed, setCollapsed] = React.useState(null);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);



    return (
        <>
            <Navbar collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-4"}>
                <Container>
                    <HashLink className="text-decoration-none" to="/home#banner">
                        <div className="d-md-flex align-items-center">
                            <img style={{ height: '35px' }} className="img-fluid" src={logo} alt="Logo" />
                            <h5 className="text-danger fw-bold border-bottom mx-2" style={{ marginBottom: '-10px' }}>Super car shop</h5>
                        </div>
                    </HashLink>
                    <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                        <Nav className="me-auto" style={{ marginBottom: '-10px' }}>
                            <Nav.Link as={HashLink} to="/" className="mr-md-5 btn" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                            <Nav.Link className="btn" as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link className="btn" as={HashLink} to="/home#products">Products</Nav.Link>
                            <Nav.Link className="btn" as={HashLink} to="/home#review">Review</Nav.Link>
                            <Nav.Link className="btn" as={HashLink} to="/">Contact</Nav.Link>

                        </Nav>
                        <Nav style={{ marginBottom: '-10px' }}>
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













