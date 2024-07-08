import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';

// Blog1 component to display details of a specific blog post
const Blog3 = () => {
  const postId = 3; // Specify the post ID you want to filter by
  const [post, setPost] = useState(null); // State to hold the post data
  const [user, setUser] = useState(null); // State to hold the user data
  const [comments, setComments] = useState([]); // State to hold comments data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the specific post
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(postResponse.data);

        // Fetch the user associated with the post
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);
        setUser(userResponse.data);

        // Fetch the comments associated with the post
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        setComments(commentsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]); // Dependency array with postId ensures useEffect runs when postId changes

  const byStyle = {
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
    color: "inherit"
  };

  if (loading) {
    return <p>Loading...</p>; // Display loading message while data is fetched
  }

  return (
    <Container>
      <Row className="justify-content-between">
        {/* Title of the post */}
        <Card.Title style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "40px" }}>
          {post ? post.title : "Unknown"}
        </Card.Title>
        {/* Main content of the post */}
        <Col md={7} className="mb-4 mt-4">
          {post ? (
            <Card key={post.id} style={{ marginBottom: '20px' }}>
              <Card.Img
                variant="top"
                src="/images.jpg"
                width={20}
                height={250}
                style={{padding:'20px'}}
              />
              <Card.Body>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <p>No post available.</p>
          )}
        </Col>
        {/* Comments section */}
        <Col md={5} className="mb-4 mt-4">
          <Card.Title>Comments</Card.Title>
          <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
              {comments.length > 0 ? (
                <ul className="list-unstyled">
                  {comments.map((comment) => (
                    <li key={comment.id} style={{ marginBottom: "10px" }}>
                      {comment.body}
                      <Link to={`/user/${comment.id}`} style={byStyle}>
                        - by {comment.email}
                      </Link>
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

export default Blog3;
