import React from "react";

import RGL, { WidthProvider as widthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./App.less";

import WidgetFactory from "./components/widgetFactory";

const ReactGridLayout = widthProvider(RGL);

class App extends React.Component {
    constructor (props) {
        super(props);

        const { layout, widgets } = this.buildWorkspace();
        this.state = { layout, widgets };
    }

    buildWorkspace () {
        return {
            layout: [
                { i: '0', x: 0, y: 0, w: 20, h: 2, static: true },
                { i: '1', x: 0, y: 2, w: 20, h: 5 },
                { i: '2', x: 0, y: 10, w: 20, h: 10 }
            ],
            widgets: [
                { widgetType: "AddTask" },
                { widgetType: "TaskList" },
                { widgetType: "TaskList" }
            ]
        };
    }

    renderWidgets () {
        return this.state.widgets.map((widget, i) => {
            const component = WidgetFactory.buildWidget(widget.widgetType, this.props);
            return (
                <div className="widget" key={i}>
                    {component}
                </div>);
        });
    }

    onLayoutChange (layout) {
        console.log("onLayoutChange: layout=", layout);
    }

    render () {
        return (
            <div data-automation-id="app" className="appWrapper">
                <ReactGridLayout
                    className="layout" cols={60} rowHeight={10} width={1200}
                    layout={this.state.layout}
                    onLayoutChange={this.onLayoutChange}
                    {...this.props}
                >
                    {this.renderWidgets()}
                </ReactGridLayout>
            </div>
        );
    }
}

export default App;
