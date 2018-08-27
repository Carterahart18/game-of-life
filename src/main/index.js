import React, { Component } from 'react';

import Canvas from './canvas';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Convey's Game of Life</h1>
        </header>
        <div className={'App-canvas'}>
          <Canvas width={400} height={300} scale={6}/>
        </div>
        <p>This app is meant to play Conway's Game of Life!</p>
      </div>
    );
  }
}
