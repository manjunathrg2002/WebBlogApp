import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Home component for the home page of Blogs Application
const Home = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        {/* Title */}
        <Card.Title style={{ paddingTop: "10px", fontSize: "40px" }}>
          Welcome to Blogs Application
        </Card.Title>
        {/* List of links */}
        <ul style={{ paddingLeft: "50px", paddingTop: "20px" }}>
          <li>
            <Link to="/blogs">View List of Blogs</Link>
          </li>
          <li>
            <Link to="/users">View List Of Users</Link>
          </li>
        </ul>
      </Row>
    </Container>
  );
};

export default Home;
