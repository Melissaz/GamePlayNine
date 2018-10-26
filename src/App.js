import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import Rules from './Rules';

class App extends Component {
  componentDidMount(){
    document.title = "Game PlayNine"
  }
  render() {
    return (
      <div>
        <Game />
        <Rules />
      </div>
    );
  }
}

export default App;
