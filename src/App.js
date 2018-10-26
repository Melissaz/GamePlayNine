import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import Rules from './Rules';
import background from './background.jpg';

var sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',


};

class App extends Component {
  componentDidMount(){
    document.title = "Game PlayNine"
  }
  render() {
    return (
      <div className="gamecontainer" style={sectionStyle}>
        <Game />
        <Rules />
      </div>
    );
  }
}

export default App;
