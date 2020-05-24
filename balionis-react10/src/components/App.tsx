import * as React from "react";
import { Tabs, Tab, TabId } from "@blueprintjs/core";

import "./App.less";

type AppProps = {}

type AppState = {
    selectedTabId: TabId
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            selectedTabId: "0"
        }
    }

    handleTabChange = (selectedTabId: TabId) => {
        this.setState({
            selectedTabId
        });
    }

    render() {
        return (
            <div className="appWrapper">
                <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={this.state.selectedTabId}>
                    <Tab id="0" title="Angular" />
                    <Tab id="1" title="Ember" panelClassName="ember-panel" />
                    <Tab id="2" title="React" />
                    <Tab id="3" disabled title="Backbone" />
                    <Tabs.Expander />
                </Tabs>
            </div>
        );
    }
}

export default App;
