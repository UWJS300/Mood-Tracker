import React, { Component } from 'react';


class LoginBtn extends Component {

  render() {
    const { loginMethod, text } = this.props;

    return (
        <button className="loginBtn" type="submit" onSubmit={this.props.loginMethod}>
          {this.props.text}
        </button>
    );
  }
}

export default LoginBtn;
