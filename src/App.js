import React from "react";
import logo from "./logo.svg";
import "./App.css";

import DarkModeToggle from "./DarkModeToggle";
import { DarkModeContext } from "./DarkModeContext";

function App() {
  const { isDarkModeOn } = React.useContext(DarkModeContext);

  return (
    <div className="App">
      <header
        className={`App-header ${
          isDarkModeOn ? "App-header-dark-mode" : "App-header-light-mode"
        }`}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DarkModeToggle />
      </header>
    </div>
  );
}

export default App;
