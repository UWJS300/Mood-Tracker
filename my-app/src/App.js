import React, { Component } from 'react';
import './App.css';
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div>
      <div className="tabHeader">
        <h2>Mood tracker</h2>
      </div>
      <div className="currentMood">
      <h3>Current mood</h3>
        <Article />
      </div>
      </div>
    );
  }
}

export default App;
