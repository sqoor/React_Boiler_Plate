import React, { Component } from 'react';
import Item from './Item';

export default class Todos extends Component {
  state = {
  };
  render() {
    // ES6
    const { myTasks, test } = this.props
    return (
      <>
        <h1>Todos Compnent</h1>
        {myTasks.map(elem =>
          < >
            <h2> Hello</h2>
            <Item item={elem} key={elem.id} title={elem.title} />
          </ >


        )}

      </ >
    );
  }
}
