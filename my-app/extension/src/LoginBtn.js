import React, { Component } from 'react';

class LoginBtn extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault()
      }

  render() {
    
    const { loginMethod, text } = this.props;
    
    return (
     
        <button className="loginBtn" onSubmit={(e) => this.handleSubmit(e)}>
          {this.props.text}
        </button>
    );
  }
}

export default LoginBtn;