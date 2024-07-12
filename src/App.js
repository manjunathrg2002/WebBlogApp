import React from "react";
import "./App.css";
import Navbar from "./components/BlogNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersList from "./components/UsersList";
import Blog from "./components/blogs/Blog";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import User from "./components/userlist/User";

// App component to manage routing and navigation
const App = () => {
    return (
        <Router>
            <div className="main-container" style={{ backgroundColor: "aliceblue" }}>
                <Navbar /> {/* Navigation bar component */}
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Route for home page */}
                    <Route path="/users" element={<UsersList />} /> {/* Route for users list */}
                    <Route path="/blogs" element={<Blogs />} /> {/* Route for blogs list */}
                    <Route path="/user/:userId" element={<User />} /> {/* Route for dynamic user */}
                    <Route path="/blog/:postId" element={<Blog />} /> {/* Route for dynamic blog */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
