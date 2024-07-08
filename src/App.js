import React from "react";
import "./App.css";
import Navbar from "./components/BlogNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersList from "./components/UsersList";
import Blog1 from "./components/blogs/Blog1";
import User1 from "./components/userlist/User1";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import User2 from "./components/userlist/User2";
import User3 from "./components/userlist/User3";
import Blog2 from "./components/blogs/Blog2";
import Blog3 from "./components/blogs/Blog3";
import User4 from "./components/userlist/User4";
import User5 from "./components/userlist/User5";
import Blog4 from "./components/blogs/Blog4";
import Blog5 from "./components/blogs/Blog5";

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
                    <Route path="/user/1" element={<User1 />} /> {/* Route for user profile 1 */}
                    <Route path="/user/2" element={<User2 />} /> {/* Route for user profile 2 */}
                    <Route path="/user/3" element={<User3 />} /> {/* Route for user profile 3 */}
                    <Route path="/user/4" element={<User4 />} /> {/* Route for user profile 4 */}
                    <Route path="/user/5" element={<User5 />} /> {/* Route for user profile 5 */}

                    <Route path="/blog/1" element={<Blog1 />} /> {/* Route for blog 1 */}
                    <Route path="/blog/2" element={<Blog2 />} /> {/* Route for blog 2 */}
                    <Route path="/blog/3" element={<Blog3 />} /> {/* Route for blog 3 */}
                    <Route path="/blog/4" element={<Blog4 />} /> {/* Route for blog 4 */}
                    <Route path="/blog/5" element={<Blog5 />} /> {/* Route for blog 5 */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
