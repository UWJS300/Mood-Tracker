import React, { Component } from 'react';
import OnOffSwitch from './OnOffSwitch';

class Options extends Component {

  render() {

    return (
        <div id="options">
        <OnOffSwitch />
        <label>
                Track my mood every: <input type="number" id="userIntervalPref" min="1" max="120" /> minutes
            </label>
        <input type="submit" value="Update alerts" id="update-btn" />
        </div>

    );
  }
}

export default Options;
