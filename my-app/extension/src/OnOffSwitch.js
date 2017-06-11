import React, { Component } from 'react';
import './OnOffSwitch.css';

class OnOffSwitch extends Component {

  render() {

    return (
        <div>
        <div id="notification">
        </div>
        <label className="onoffswitch">
          <input type="checkbox" id="app-enabled" />
          <div className="slider round"></div>
        </label>
        </div>

    );
  }
}

export default OnOffSwitch;
