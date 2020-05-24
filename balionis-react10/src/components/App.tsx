import * as React from "react";
import "./App.less";

type AppProps = {}

type AppState = {
    value: string;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            value: "Hello World."
        };
    }

    render() {
        return (
            <p className="appWrapper">{this.state.value}</p>
        );
    }
}

export default App;
