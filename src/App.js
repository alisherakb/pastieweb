import React from 'react';
import logo from './assets/logo.webp';
import './App.css';

const gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668']
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBlockStart: 0,
            marginBlockEnd: 0
          }}
        >
          <div className="title">
            <img src={logo} className="logo" />
            <p className="title-style">Pastie</p>
          </div>
          <p style={{ fontSize: 80, fontFamily: 'Avenir-Regular' }}>
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
