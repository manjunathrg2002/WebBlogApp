import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';

// User1 component to display details of a specific user's posts and comments
const User1 = () => {
  const userId = 1; // Specify the user ID you want to filter by
  const [posts, setPosts] = useState([]); // State to hold user's posts
  const [comments, setComments] = useState([]); // State to hold comments on user's posts
  const [users, setUsers] = useState([]); // State to hold all users
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts of the specific user
        const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const filteredPosts = postsResponse.data.filter(post => post.userId === userId);
        setPosts(filteredPosts);

        // Fetch comments for each post of the user
        const commentsPromises = filteredPosts.map(post =>
          axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        );
        const commentsResponses = await Promise.all(commentsPromises);
        const allComments = commentsResponses.flatMap(response => response.data);
        setComments(allComments);

        // Fetch all users
        const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(usersResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]); // Dependency array with userId ensures useEffect runs when userId changes

  const byStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  // Function to get username by user ID
  const getUsernameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  if (loading) {
    return <p>Loading...</p>; // Display loading message while data is fetched
  }

  return (
    <Container>
      <Row className="justify-content-between">
        {/* Title with username */}
        <Card.Title style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "40px" }}>
          {getUsernameById(userId)}
        </Card.Title>
        {/* Section for user's posts */}
        <Col md={3} className="mb-4 mt-4">
          <Card.Title>Posts</Card.Title>
          <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
              {posts.length > 0 ? (
                <ul className="list-unstyled">
                  {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: "10px" }}>
                      {post.title}
                      <hr />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No posts available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
        {/* Section for user's comments */}
        <Col md={9} className="mb-4 mt-4">
          <Card.Title style={{ paddingLeft: "20px", paddingTop: "10px" }}>Comments</Card.Title>
          <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
              {comments.length > 0 ? (
                <ul className="list-unstyled">
                  {comments.map((comment) => (
                    <li key={comment.id} style={{ marginBottom: "10px" }}>
                      {comment.body}
                      <hr />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default User1;
