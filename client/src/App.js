import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Flashcard from "./components/Flashcard";

function App() {
  const [message, setMessage] = useState("");

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setMessage(res));
  }

  callAPI();
  return (
    <div className="App">
      <header className="App-header">
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
        <p className="App-intro">{message}</p>
        <p>
          <Flashcard />
        </p>
      </header>
    </div>
  );
}

export default App;
