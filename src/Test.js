import React, { Component } from 'react';
import Todos from './components/Todos';
// import DetailsModal from './components/DetailsModal'

export default class App extends Component {
  state = {
    a: 6,
    title: 'sqoor',
    type: 'password'
  };

  render() {
    console.log('this', this)
    return (
      // <></>: react fragment
      <>
        <div>
          {/* how to write comment in JSX */}
          1
        </div >
        {/* you will not use it 99% of the time
        <Todos>       </Todos> */}
        <Todos Deyaa={this.state.type} r="5" />
      </ >
    );
  }
}
