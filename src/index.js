import React from "react";
import ReactDOM from "react-dom";
import StudentManagement from "./StudentManagement";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import setupProxy from "./setupProxy";
ReactDOM.render(<StudentManagement />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
