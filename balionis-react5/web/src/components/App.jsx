import React, { Component } from "react";
import "./App.less";
import { readUser } from "../actions/userActions";

class App extends Component {
    constructor () {
        super();
        this.state = { value: "", disabled: true, responses: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        readUser(this.state.value)
            .then(data => {
                const responses = [...this.state.responses, data];
                this.setState({
                    value: '',
                    disabled: false,
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
                <div className="responses">
                    {responses}
                </div>
            </div>
        );
    }
}

export default App;
