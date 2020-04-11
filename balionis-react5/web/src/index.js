import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./components/App";

const wrapper = document.getElementById("app");

if (wrapper) {
    ReactDOM.render(<App />, wrapper);
} else {
    console.error('missing [id="app"]');
}

