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
      this.state = {loginMessage: null}
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit = (e) => {
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
        <LoginBtn loginMethod="logintofirebasewithgoogle-replacewithreallink" text="Sign in with Google" onSubmit={this.handleSubmit}/>
        <br />
        <LoginBtn loginMethod="logintofirebasewithgithub-replacewithreallink" text="Sign in with Github" />
        </div>
    );
  }

}


export default Login;
