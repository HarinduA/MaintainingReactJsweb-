import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div id="preloader-active">
                        <div className="preloader d-flex align-items-center justify-content-center">
                            <div className="preloader-inner position-relative">
                                <div className="preloader-circle"></div>
                                <div className="preloader-img pere-text">
                                    <img src="assets/img/logo/loder.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <header>
                        <div className="header-area">
                            <div className="main-header header-sticky">
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        <div className="col-xl-2 col-lg-2 col-md-1">
                                            <div className="logo">
                                                <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-10 col-lg-10 col-md-10">
                                            <div className="menu-main d-flex align-items-center justify-content-end">
                                                <div className="main-menu f-right d-none d-lg-block">
                                                    <nav>
                                                        <ul id="navigation">
                                                            <li><Link to="/">Home</Link></li>
                                                            <li><Link to="/about">About</Link></li>
                                                            <li><Link to="#">Page</Link>
                                                                <ul className="submenu">
                                                                    <li><Link to="/blog">Blog</Link></li>
                                                                    <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="/contact">Contact</Link></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="header-right-btn f-right d-none d-xl-block ml-20">
                                                    <a href="#" className="btn header-btn">Get Free Consultant</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* Add other routes as necessary */}
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
          
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header;
