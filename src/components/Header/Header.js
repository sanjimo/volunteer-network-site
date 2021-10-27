import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="header">
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold text-dark">
                    <img
                    alt="logo"
                    src={logo}
                    width="150"
                    className="d-inline-block align-top"
                     />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none text-dark fs-6 ms-3 fw-bold" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-dark fs-6 ms-3 fw-bold" to="/events">Events</NavLink>
                            <NavLink className="text-decoration-none text-dark fs-6 ms-3 fw-bold" to="/donation">Donation</NavLink>
                            {
                                user.email && <span className="text-dark fw-bold ms-3">{user.displayName}</span>
                            }
                            {
                                user.email?
                                <button className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-primary btn-sm" onClick={logOut}>Logout</button>
                                :
                                <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-primary btn-sm" to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;