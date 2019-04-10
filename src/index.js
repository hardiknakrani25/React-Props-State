import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let count = 0;
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox {this.props.count}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
setInterval(() => {
  ReactDOM.render(<App count={count++} />, rootElement);
}, 1000);
