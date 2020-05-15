import React from "react";
import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./TaskProperties";

import "./Task.less";

class Task extends React.Component {

    constructor (props) {
        super(props);
    }

    handleClick (event) {
        event.preventDefault();
        this.props.removeTask(this.props.task.id);
    }

    render () {
        return (
            <li className="taskWrapper" onClick={(event) => this.handleClick(event)}>
                <span>{this.props.task.content}</span>
            </li>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
