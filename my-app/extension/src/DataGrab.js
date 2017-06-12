import React from 'react'
import firebase from 'firebase'
import base from './base'
import Rebase from 're-base'


class DataGrab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {URL1: 'URL1', URL2: 'URL2', URL3: 'URL3', mood1: 'mood1', mood2: 'mood2', mood3: 'mood3', comment1: 'comment1', comment2: 'comment2', comment3: 'comment3'};
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
  

  base.bindToState('userData/' + userId + '/URL', {
    context: this,
    state: 'URL1',
    asArray: false
  });
  base.bindToState('userData/' + userId + '/submittedMood', {
    context: this,
    state: 'mood1',
    asArray: false
  });
  base.bindToState('userData/' + userId + '/comment', {
    context: this,
    state: 'comment1',
    asArray: false
  });
  

  
}


  
  render () {
    
  let display = this.state;
        
    return (
      <div>
      <div className="dataGroup group1">
      <p>URL: {display.URL1} | Mood: {display.mood1} | Comment: {display.comment1}</p>
      </div>
      </div>
    );

                                   
}
}


export default DataGrab;