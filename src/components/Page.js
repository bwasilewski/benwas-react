import React, { Component } from 'react';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return(<div><h2>{this.title}</h2></div>);
    }
}


