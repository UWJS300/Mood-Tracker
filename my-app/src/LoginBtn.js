import React, { Component } from 'react';


class LoginBtn extends Component {

  render() {
    const { destination, text } = this.props;

    return (
        <button className="loginBtn" type="submit">
          <a href={this.props.destination}>{this.props.text}</a>
        </button>
    );
  }
}

export default LoginBtn;
