import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import History from './History';
import Settings from './Settings';
import Login from './Login';

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {userLoggedIn: false}
    }
componentDidMount() {
  // get a boolean from the Login
    this.setState({
      userLoggedIn: true
    });

  }
 
 
  render() {
    //const userLoggedIn = false; //this needs to be addressed with state
    const loginState = this.state.userLoggedIn

    console.log(loginState)

    if (loginState) {
      return (
        <div>
        <div className="tabHeader">
          <h2>Mindful Reader: Chrome Extension Version</h2>
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
