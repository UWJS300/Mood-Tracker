import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import Login from './Login';

class App extends Component {
  render() {
    const userLoggedIn = false; //this needs to be addressed with state

    if (userLoggedIn) {
      return (
        <div>
        <div className="tabHeader">
          <h2>Mindful Reader</h2>
        </div>
        <div className="currentMood">
        <h3>Current mood</h3>
          <Article />
        </div>
        </div>
        );
    } else {
      return (
        <div>
          <Login />
        </div>
      );
    }
  }
}

export default App;
