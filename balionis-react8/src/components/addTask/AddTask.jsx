import React from "react";
import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./AddTaskProperties";

import "./AddTask.less";

class AddTask extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            value: "",
            disabled: true,
        };
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
        this.props.addTask(this.state.value);
        this.setState({
            value: '',
            disabled: true,
        });
    }

    render () {
        return (
            <div className="addTaskWrapper">
                <input type="text"
                    value={this.state.value}
                    onChange={(event) => this.handleChange(event)}
                    className="addTaskInput"/>
                <button onClick={(event) => this.handleSubmit(event)}
                    disabled={this.state.disabled}
                    className="addTaskButton">
                    Add
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
