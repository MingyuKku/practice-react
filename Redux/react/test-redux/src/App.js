import React, { Component } from 'react';
import AddNumberRoot from './component/AddNumberRoot';
import DisplayNumberRoot from './component/DisplayNumberRoot';
import './App.css';



export default class App extends Component {
  state = {
    number: 0
  }
  
  render () {
    return (
      <div className="App">
        <h1>루트</h1>
        <AddNumberRoot />
        <DisplayNumberRoot
          number={this.state.number}
        />
      </div>
    );
  }
}
