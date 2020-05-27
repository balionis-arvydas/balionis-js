import React, { Component } from "react";
import "./MyComponent.less";

class MyComponent extends Component {
    constructor () {
        super();

        this.state = {
            value: "Hello World."
        };
    }

    render () {
        return (
            <p className="myComponentWrapper">{this.state.value}</p>
        );
    }
}

export default MyComponent;
