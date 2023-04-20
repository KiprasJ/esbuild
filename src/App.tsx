import React from 'react';
import logo from './logo.svg';
import './App.scss';
import styles from './App.module.scss';
import './globals/static.scss';
import { Text as Textcomp } from './components/base/text/text';

function App() {
  return (
      <div className={styles.container}>
        <div className="App">
          <Textcomp>Test</Textcomp>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
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
      </div>
  );
}

export default App;
