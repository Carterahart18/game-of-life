// @flow

import React, { Component } from 'react';
import * as util from './util';
import './canvas.css';

export default class Canvas extends Component {
  state = {
    cells: [
      [false, true, false, false],
      [true, false, true, true],
      [false, true, false, true],
      [false, false, false, false]
    ]
  };

  componentDidMount() {
    // const context = this.refs.canvas.getContext('2d');

    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const context = this.refs.canvas.getContext('2d');
    context.clearRect(0, 0, 300, 300);

    const { cells } = this.state;

    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        if (cells[i][j] === true) {
          util.drawPixel(this.getPropsWith({ x: j, y: i }));
        }
      }
    }
  }

  getPropsWith(obj) {
    const context = this.refs.canvas.getContext('2d');
    return { context, ...this.props, ...obj };
  }

  render() {
    const { height, width } = this.props;
    return (
      <canvas className={'Canvas'} ref="canvas" height={height} width={width} />
    );
  }
}
