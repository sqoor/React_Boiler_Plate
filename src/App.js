import React, { Component } from 'react';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
  };

  render() {
    return (
      <>
        <h1>Main Compnent</h1>
        <Todos />
      </ >
    );
  }
}
