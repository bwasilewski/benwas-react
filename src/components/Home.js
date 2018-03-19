import React from 'react';
import Page from './Page.js';

class Home extends Page {
    render() {
        return (
            <div className="Page">
                <p>Hi there! My name is Ben Wasilewski and I am a web application developer currently residing in Chicago, IL. I primarily work with <b>JavaScript</b> and <b>Python</b>.</p>

                <p>You can contact me for work enquiries at <a href="mailto:benwasilewski@gmail.com">benwasilewski@gmail.com</a>.</p>

                <ul id="skills">
                    <li>JavaScript <small>(React, Angular, Backbone, Node.js, ES6/ES7)</small></li>
                    <li>Python <small>(Django, Flask)</small></li>
                    <li>PHP, Wordpress</li>
                    <li>UX Design</li>
                </ul>

                <p>Find me on: <a href="http://github.com/bwasilewski">GitHub</a>, <a href="http://bitbucket.org/bwasilewski">BitBucket</a> and <a href="https://www.linkedin.com/in/benwasilewski">LinkedIn</a></p>
            </div>
        );
    };
};

export default Home;
