import React, {Component} from 'react'; //import statement provides the React library and Component class to create a component
import Node from './Node/Node';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
             HELLO
             <Node></Node>
            </div>
        );
    }
}

/* This filetype is of type jsx, which is a syntax extension to JavaScript. jsx stands for JavaScript XML, and it
allows us to write HTML in React. */