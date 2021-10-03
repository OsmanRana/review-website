
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className = "shadow-sm">
                <Container>
                    <NavLink to="/home"><img className="w-50" src={logo} alt="Logo" /></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto">
                            <NavLink className="me-3 text-decoration-none fs-5" activeStyle={{ fontWeight: "bold", color: "orange" }} to="/home">Home</NavLink>
                            <NavLink className="me-3 text-decoration-none fs-5" activeStyle={{ fontWeight: "bold", color: "orange" }} to="/services">Services</NavLink>
                            <NavLink className="me-3 text-decoration-none fs-5" activeStyle={{ fontWeight: "bold", color: "orange" }} to="/about">About Us</NavLink>
                            <NavLink className="me-3 text-decoration-none fs-5" activeStyle={{ fontWeight: "bold", color: "orange" }} to="/contact">Contact Us</NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl 
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className = "shadow-sm" variant="warning">Search</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;