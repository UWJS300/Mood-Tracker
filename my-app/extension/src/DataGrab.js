import React from 'react'
import firebase from 'firebase'
import base from './base'
import Rebase from 're-base'


class DataGrab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {URL: 'this URL', submittedMood: 'this mood'};
    }
  
componentWillMount(){
  let userId
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        userId = firebase.auth().currentUser.uid;  
        return userId
      } else {
        userId = 'anonymous'
      }
    });
  

  base.bindToState('userData/Jyh3X0OSMpRuB0agGRmF1XmXhh92/-KmNpjfADRzLFh6_mZVy/URL', {
    context: this,
    state: 'URL',
    asArray: false
  });
  base.bindToState('userData/Jyh3X0OSMpRuB0agGRmF1XmXhh92/-KmNpjfADRzLFh6_mZVy/submittedMood', {
    context: this,
    state: 'submittedMood',
    asArray: false
  });
  
};

  
  render () {
    
  let display = this.state;

    
    return (
      <div>
      <p>{display.URL}</p>
      <p>{display.submittedMood}</p>
      
      </div>
    );

                                   
}
}


export default DataGrab;