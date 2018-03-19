import React, { Component } from 'react';
import './Page.css';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
        console.log('content: ', this.content)
    }

    render() {
        return(
            <div>
                <h2>{this.title}</h2>
                {this.content}
            </div>
        );
    }
}


