import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";
function App() {
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
      </header>
      ReactDOM.render(
      <MessengerCustomerChat pageId="104070968351699" appId="221465953034852" />
      , document.getElementById("demo"));
    </div>
  );
}

export default App;
