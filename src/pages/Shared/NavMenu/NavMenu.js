import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from './img/logo.png';
import Swal from 'sweetalert2'



const NavMenu = () => {
    const [isSticky, setSticky] = React.useState(false);
    const [isCollapsed, setCollapsed] = React.useState(null);
    const { user, logOut } = useAuth();
    const history = useHistory()


    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                history.push('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    }


    return (
        <>
            <Navbar collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-4"}>
                <Container>
                    <HashLink className="text-decoration-none" to="/">
                        <div className="d-md-flex align-items-center">
                            <img style={{ height: '35px' }} className="img-fluid" src={logo} alt="Logo" />
                            <h5 className="text-danger fw-bold border-bottom mx-2" style={{ marginBottom: '-5px' }}>Super car shop</h5>
                        </div>
                    </HashLink>
                    <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                        <Nav className="me-auto" style={{ marginBottom: '-5px' }}>
                            <Nav.Link as={HashLink} to="/" className="mr-md-5 btn" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/home#products">Products</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/home#review">Review</Nav.Link>
                            <Nav.Link className="btn text-dark" as={HashLink} to="/home#contact">Contact</Nav.Link>

                        </Nav>
                        <Nav className="d-md-flex align-items-center" style={{ marginBottom: '-5px' }}>
                            {user?.email && <Nav.Link className="btn text-dark" as={Link} to="/dashboard">Dashboard</Nav.Link>}
                            {user?.email ? <Nav.Link onClick={handleLogout}> <button className="btn btn-outline-danger px-3 py-0 rounded-pill ">Logout</button></Nav.Link>

                                : <Nav.Link as={Link} to="/login"><button className="btn btn-outline-info px-3 py-0 rounded-pill ">Login</button> </Nav.Link>}
                            {user?.email && <Nav.Link as="small" className="text-danger mt-1">{user?.displayName || user?.email}</Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;













