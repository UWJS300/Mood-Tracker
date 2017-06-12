import React from 'react'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import base from './base'



var userId
var newURL
var key
var childData
var keyArray = []
var childArray = []


class GetData extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {user: 'user', mood: 'mood', comment: 'comment', URL: 'URL', timeStamp: 'time', important: 'important'};
    }
  
  componentDidMount(){
 
    
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      let userId = firebase.auth().currentUser.uid;
      getData(userId)
      console.log('userID', userId)
    } else {
      let userId = 'anonymous'
      }
    });
    
    const testRef = firebase.database().ref('userData/' + userId + '/');
    testRef.once('value', snap => {
      snap.forEach((childSnapshot) => {
        this.state.mood.push(childSnapshot.val());
      })
    })
    
    function getData(userId) {
      var thisData = firebase.database().ref('userData/' + userId + '/');
      thisData.on('child_added', function(snapshot) {
        const newData = (snapshot.val())
        console.log('raw: ', newData)

        snapshot.forEach(function(childSnapshot) {
        key = childSnapshot.key;
        keyArray.push(key)
        childData = childSnapshot.val();
        childArray.push(childData)
        });

      });
      console.log('keyArray:', keyArray)
      console.log('childArray:', childArray)
      return (childArray[0]) 
      
  }  
  this.setState({ URL: getData() });
    
};
  
  render () {
    
   let display = this.state;
    
    return (
      <div>
      <ul>
      <li>{display.user}</li>
      <li>{display.URL}</li>
      <li>{display.mood}</li>
      <li>{display.comment}</li>
      <li>{display.timeStamp}</li>
      <li>{display.important}</li>   
      </ul>
      </div>
    );

  }

}
  
export default GetData;