// @flow

import React, { Component } from 'react';
import './canvas.css';

type Props = {
  height: number,
  width: number,
};

export default class Canvas extends Component<Props> {

  drawCell(i, j, alive) {

  }


  render() {
    const { height, width } = this.props;
    return (
      <canvas height={height} width={width}/>
    );
  }
}
