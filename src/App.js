import React, { Component } from 'react';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Contact from './pages/contact/Contact.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BasicExample extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
};


export default BasicExample;
