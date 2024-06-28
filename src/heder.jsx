import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Switch, Route, Link,NavLink } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Contact from "./components/contact";
import Blog from "./components/blog";
import Profile from "./components/profile";
import Writepost from "./components/writepost";


export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar expand="lg" bg="light">
                        <Navbar.Brand><NavLink  activeStyle = {{color:'orange'}} to="/app">React-Bootstrap </NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link> <NavLink  activeStyle = {{color:'orange'}} to="/about">About Us</NavLink ></Nav.Link>
                                <Nav.Link><NavLink  activeStyle = {{color:'orange'}}  to="/contact">Contact Us</NavLink ></Nav.Link>
                                <Nav.Link ><NavLink  activeStyle = {{color:'orange'}}  to="/blog">Blogs</NavLink ></Nav.Link>
                                <Nav.Link ><NavLink  activeStyle = {{color:'orange'}}  to="/profile">Profile</NavLink ></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <Switch>
                    <Route path="/writepost">    
                       <Writepost />
                    </Route>
                    <Route path="/about">    
                      <About />
                    </Route>
                    <Route path="/contact">    
                     <Contact />
                    </Route>
                    <Route path="/blog">    
                     <Blog />
                    </Route>
                    <Route path="/profile">    
                     <Profile />
                    </Route>
                    <Route path="/">    
                     <App />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
