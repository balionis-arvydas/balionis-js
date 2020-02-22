import React, { Component } from "react";
import "./App.less";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: "Hello World."
    };
  }
  
  render() {
    return (
        <p className="App-wrapper">{this.state.value}</p>
    );
  }
}  

export default App;
