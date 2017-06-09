import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import History from './History';
import Settings from './Settings';
import Login from './Login';

class App extends Component {
  render() {
    const userLoggedIn = true; //this needs to be addressed with state

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

	  <div className="moodHistory">
      <h3>Mood history</h3>
        <History />
      </div>
		
	<div className="moodSettings">
      <h3>Mood settings</h3>
        <Settings />
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
