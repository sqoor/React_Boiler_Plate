import React, { Component } from 'react';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    myTasks: [
      {
        id: 1,
        title: "Eat food",
        isDone: true
      },
      {
        id: 2,
        title: "Eat fried chiken",
        isDone: false
      },
      {
        id: 3,
        title: "Eat again",
        isDone: true
      },
    ]
  };

  render() {
    console.log(this)
    return (
      <>
        <h1>Main Compnent</h1>
        <Todos myTasks={this.state.myTasks} test="blabla" />
      </ >
    );
  }
}
