import React from "react";
import "./Nav.css"
import { Nav, Navbar, Container, Button  } from "react-bootstrap";
import logo from "../media/logo.png"
export default function Navs(){
    return(
        <Navbar expand="lg" >
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#About">About Us</Nav.Link>
                <Nav.Link href="#Explore">Explore Foods</Nav.Link>
                <Nav.Link href="#Reviews">Reviews</Nav.Link>
                <Nav.Link href="#FAQ">FAQ</Nav.Link>
                <Button>01125048668</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}