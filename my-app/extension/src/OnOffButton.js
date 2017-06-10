import React, { Component } from 'react';

class OnOffButton extends Component {

  render() {

    return (
        <div>
        <input type="checkbox" name="onoffswitch"
        class="onoffswitch-checkbox" id="onoffswitch" />
        <label class="onoffswitch-label"> for="onoffswitch"
        <span class="onoffswitch-inner">
        :: before
        :: after
        </span>
        <span class="onoffswitch-switch"></span>
        </label>
        </div>
    );
  }
}

export default OnOffButton;
