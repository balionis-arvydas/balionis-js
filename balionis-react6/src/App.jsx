import React from "react";

import AddTask from "./components/addTask/AddTask";
import TaskList from "./components/taskList/TaskList";

import "./App.less";

class App extends React.Component {
    render () {
        return (
            <div className="appWrapper">
                <AddTask/>
                <TaskList/>
            </div>
        );
    }
}

export default App;
