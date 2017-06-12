import React, { Component } from 'react';
import './Login.css';
import LoginBtn from './LoginBtn'
import { login } from './helpers/auth'


function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Login extends Component {

  constructor(props) {
      super(props);
      this.state = {loginMessage: null, userLoggedIn: false}
      this.handleGoogleSubmit = this.handleGoogleSubmit.bind(this);
      this.handleGitHubSubmit = this.handleGitHubSubmit.bind(this);
    }

  handleGoogleSubmit = (e) => {
    e.preventDefault()
    login(login)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
      }
  
  handleGitHubSubmit = (e) => {
    e.preventDefault()
    login(login)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
      }

  render () {
    return (
      <div>
        <h2>Mindful Reader</h2>
      <form onSubmit={this.handleGoogleSubmit}>
        <LoginBtn loginMethod="logintofirebasewithgoogle-replacewithreallink" text="Sign in with Google"/>
      </form>
        <br />
      <form onSubmit={this.handleGitHubSubmit}>
        <LoginBtn loginMethod="logintofirebasewithgithub-replacewithreallink" text="Sign in with Github"/>
      </form>
        </div>
    );
  }
}


export default Login;