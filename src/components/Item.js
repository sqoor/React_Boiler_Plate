import React, { Component } from 'react';

export default class Item extends Component {
  state = {
  };
  render() {
    console.log(this)
    return (
      <>
        <h1>{this.props.item.title}</h1>
        <h1>{this.props.item.id}</h1>
        <h1>{this.props.title}</h1>

      </ >
    );
  }
}
