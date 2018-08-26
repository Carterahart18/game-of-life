import React, { Component } from 'react';

import Canvas from './canvas';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Convey's Game of Life</h1>
        </header>
        <Canvas width={400} height={300} />
        <p>This app is meant to play Conway's Game of Life!</p>
      </div>
    );
  }
}
