import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div className="App">
                <Header />
                <hr />
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </Router>
            </div>
        );
    }
}
