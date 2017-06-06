import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import Userform from './Userform'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Userform />
        </div>
    );
  }
}

export default App;
