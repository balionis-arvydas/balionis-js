import React, { Component } from "react";
import "./App.less";

import { MyComponent } from "balionis-react11";

class App extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="appWrapper">
                <MyComponent/>
            </div>
        );
    }
}

export default App;
