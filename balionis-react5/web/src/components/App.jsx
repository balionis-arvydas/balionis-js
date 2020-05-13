import React, { Component } from "react";
import "./App.less";
import { readUser } from "../actions/userActions";

class App extends Component {
    constructor () {
        super();
        this.state = { useSocket: false, value: "", disabled: true, responses: [] };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleToggle (event) {
        const useSocket = event.target.checked;
        this.setState({
            useSocket
        });
    }

    handleChange (event) {
        const value = event.target.value;
        const disabled = value === null || value.length < 3;
        this.setState({
            value,
            disabled
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        readUser(this.state.value, this.state.useSocket)
            .then(data => {
                const responses = [...this.state.responses, data];
                this.setState({
                    value: '',
                    disabled: true,
                    responses,
                });
            });
    }

    render () {
        const responses = this.state.responses.map((x, i) => {
            return (
                <div className="message" key={i}>{x}</div>
            );
        });

        return (
            <div className="App-wrapper">
                <div className="adder">
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit} disabled={this.state.disabled}>Add</button>
                </div>
                <div className="protocol">
                    Use Sockets:
                    <input type="checkbox" defaultChecked={this.state.useSocket} onClick={this.handleToggle} />
                </div>
                <div className="responses">
                    {responses}
                </div>
            </div>
        );
    }
}

export default App;
