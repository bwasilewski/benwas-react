import React, { Component } from 'react';
import Navigation from './Navigation.js';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1>Ben Wasilewski</h1>
                <small>Professional Web Developer located in Chicago, Illinois</small>
                <Navigation />
            </header>
        );
    }
}

export default Header;
