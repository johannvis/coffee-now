import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyDropdown from './MyDropDown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. boom boom
          wow - <h1>Toyota</h1>
          <div>
      <h1>React Select Example</h1>
      <MyDropdown />
    </div>
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
    </div>
  );
}

export default App;
