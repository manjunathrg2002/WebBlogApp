import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

// Blogs component to display a list of blogs
const Blogs = () => {
  const [posts, setPosts] = useState(null); // State to hold blog posts
  const [users, setUsers] = useState([]);   // State to hold users

  // Fetch data from APIs using useEffect hook
  useEffect(() => {
    // Fetch posts data
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts data: ", error);
      });

    // Fetch users data
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users data: ", error);
      });
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  // Inline style for alignment
  const byStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  // Function to get username by user ID
  const getUsernameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  return (
    <Container>
      <Row className="justify-content-between">
        {/* Title */}
        <Card.Title style={{ paddingTop: "10px", fontSize: "40px" }}>
          List of Blogs
        </Card.Title>
        {/* Blog Cards */}
        <Col md={12} className="mb-4 mt-4">
          {posts ? (
            posts.map((post) => (
              <Card key={post.id} style={{ marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src="/images.jpg"
                  width={20}
                  height={250}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>

                  {/* Link to user profile */}
                  <Link
                    to={`/user/${post.userId}`}
                    style={byStyle}
                  >
                    - by {getUsernameById(post.userId)}
                  </Link>

                  {/* Link to read more */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="btn btn-primary"
                  >
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
