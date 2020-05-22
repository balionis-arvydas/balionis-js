import React from "react";
import AddTask from "./addTask/AddTask";
import TaskList from "./taskList/TaskList";

const buildWidget = (widgetType, props = {}) => {
    switch (widgetType) {
        case "AddTask": return (<AddTask {...props}/>);
        case "TaskList": return (<TaskList {...props}/>);
        default: return (<div>{widgetType}</div>);
    }
};

export default {
    buildWidget
};
