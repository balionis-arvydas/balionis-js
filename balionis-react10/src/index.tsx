import * as React from "react";
import * as ReactDOM from 'react-dom';

import "./index.css";

import App from "./components/App";

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : false;
