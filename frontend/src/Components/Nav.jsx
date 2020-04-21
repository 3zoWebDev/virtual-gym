import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
export default class Nave extends Component {
  render() {
    const authNavDetails = this.props.user ? (
      <>
        <Nav.Link as={Link} to="/updateprofile">
          Welcome, {this.props.user.name}
        </Nav.Link>
        {this.props.user.isAdmin ? (
          <a
            target="_blank"
            className="navLink"
            href="http://localhost:5000/adminbro"
          >
            Dashboard
          </a>
        ) : (
          ""
        )}

        {this.props.user.isAdmin ? (
          <a
            target="_blank"
            className="navLink"
            href="https://studio.youtube.com/channel/UC3ljgH1h5HsQsL3ZX-eAbng/livestreaming?utm_campaign=upgrade&utm_medium=redirect&utm_source=%2Fmy_live_events"
          >
            Add Live Class
          </a>
        ) : (
          ""
        )}
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
            <Nav.Link as={Link} to="/Trainers">
              Our Trainers
            </Nav.Link>
          </Nav>
          <Nav>{authNavDetails}</Nav>
        </Navbar>
      </div>
    );
  }
}
