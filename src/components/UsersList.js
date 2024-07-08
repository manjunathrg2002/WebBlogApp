import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// UsersList component to display a list of users
const UsersList = () => {
  const [users, setUsers] = useState(null); // State to hold users data
  const [selectedUser, setSelectedUser] = useState(null); // State to hold selected user

  // Fetch users data from API using useEffect hook
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  // Function to handle user click and set selected user
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <Container>
        {/* Title */}
        <Card.Title style={{ paddingTop: "10px", fontSize: "40px" }}>
          Users
        </Card.Title>
        {/* User list */}
        <Row className="justify-content-between">
          <Col md={12} className="mt-4 float-right">
            <Card style={{ marginBottom: "10px", cursor: "pointer" }}>
              <Card.Body>
                {users ? (
                  <ul className="list-unstyled">
                    {users.map((user) => (
                      <li
                        key={user.id}
                        style={{ marginBottom: "10px", cursor: "pointer" }}
                        onClick={() => handleUserClick(user)}
                      >
                        {/* Link to user profile */}
                        <Link
                          to={`/user/${user.id}`}  // Dynamically pass user id to the link
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {user.name}
                        </Link>
                        <hr />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Loading...</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UsersList;
