import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import History from './History';
import Settings from './Settings';
import Options from './Options';
import Login from './Login';
import TabNavigation from './TabNavigation'

class App extends Component {
  render() {
    const userLoggedIn = true; //this needs to be addressed with state

    if (userLoggedIn) {
      return (
        <div>

          <div className="tabHeader">
            <h2>Mindful Reader: Chrome Extension Version</h2>
          </div>
          <Options />
          <TabNavigation />


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
