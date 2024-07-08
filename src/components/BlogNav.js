import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ButtonStyle.css";

// BlogNav component for navigation bar
const BlogNav = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar
        style={{
          backgroundColor: "#212529",
        }}
      >
        <Navbar.Brand href="/" style={{ color: "white", marginLeft: "10px" }}>
          Blogs App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-between"
        >
          <Nav>
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" style={{ color: "white" }}>
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/users" style={{ color: "white" }}>
              Users
            </Nav.Link>
          </Nav>
          <Form
            inline
            className="d-flex align-items-center"
            style={{ marginRight: "30px" }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="ml-auto mr-2"
            />
            <button className="custom-button">Search</button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default BlogNav;
