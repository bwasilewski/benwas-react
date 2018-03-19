import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        );
    }
}
