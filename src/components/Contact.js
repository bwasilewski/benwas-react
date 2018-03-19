import React from 'react';
import Page from './Page.js';

class Contact extends Page {
    render() {
        return (
            <div className="Page">
                <h2>Contact Me</h2>
                <p>There are many ways that you can contact me:</p>

                <h3>Direct</h3>
                <ul>
                    <li>Phone: (847) 721-9972</li>
                    <li>Email: <a href="mailto:benwasilewski@gmail.com">benwasilewski@gmail.com</a></li>
                </ul>

                <h3>Social Media</h3>

                <p>Find me on: <a href="http://github.com/bwasilewski">GitHub</a>, <a href="http://bitbucket.org/bwasilewski">BitBucket</a> and <a href="https://www.linkedin.com/in/benwasilewski">LinkedIn</a></p>
            </div>
        );
    };
};

export default Contact;
