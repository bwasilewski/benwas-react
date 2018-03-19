import React from 'react';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        )
    }
}
