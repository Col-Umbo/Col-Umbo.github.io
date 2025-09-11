import React from 'react';
import image from './teppei.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Work in progress. Ignore.
        </h1>
        <img src={image} className="wip-gif" alt="It's really broken if you're seeing this" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.SAMPLE TEXT
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
