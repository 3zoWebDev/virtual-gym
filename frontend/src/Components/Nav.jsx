import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Nave extends Component {
  render() {
    const authNavDetails = this.props.user ? (
      <>
        <Nav.Link as={Link} to="/updateprofile">
          {this.props.user.name}
        </Nav.Link>
        <Nav.Link as={Link} to="/logout" onClick={this.props.logout}>
          Logout
        </Nav.Link>
      </>
    ) : (
      <>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          Sign Up
        </Nav.Link>
      </>
    );
    return (
      <div>
        {/*  style={{ backgroundColor: "hsla(0, 0%, 0%, 0)" }} */}
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand>GYM</Navbar.Brand>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>{authNavDetails}</Nav>
        </Navbar>
      </div>
    );
  }
}
