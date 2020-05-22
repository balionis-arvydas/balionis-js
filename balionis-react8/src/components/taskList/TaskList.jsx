import React from "react";

import { connect } from "react-redux";

import Task from "../task/Task";
import { mapStateToProps } from "./TaskListProperties";

import "./TaskList.less";

class TaskList extends React.Component {
    render () {
        const tasks = this.props.tasks.map(t => <Task key={t.id} task={t}/>);
        return (
            <div className="taskListWrapper">
                {tasks}
            </div>
        );
    }
}

export default connect(mapStateToProps)(TaskList);
