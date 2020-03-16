import React from 'react';
import logo from './logo.svg';
import './App.css';

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
        <p>Username</p>
        <input type="text" />
        <p>Email</p>
        <input text="text" />
        <p>Password</p>
        <input type="password" />
        <button onClick={() => alert('Done!')}>SignUp</button>
      </header>
    </div>
  );
}

export default App;
