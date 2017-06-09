import React, { Component } from 'react';
import './Login.css';
import LoginBtn from './LoginBtn'

class Login extends Component {

  render() {
    return (
      <div>
        <h2>Mindful Reader</h2>
        <LoginBtn destination="logintofirebasewithgoogle-replacewithreallink" text="Sign in with Google" />
        <br />
        <LoginBtn destination="logintofirebasewithgithub-replacewithreallink" text="Sign in with Github" />
      </div>
    );
  }
}

export default Login;
