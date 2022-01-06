import React from "react";
import Form from "./formComponent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div className="formsContainer">
        <Form title="Daily" />
        <Form title="5min Task" />
        <Form title="MUST" />
        <Form title="Can Do" />
      </div>
    </div>
  );
}

export default App;
