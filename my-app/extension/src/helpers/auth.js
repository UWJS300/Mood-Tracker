import base from '../base'
import firebase from 'firebase'

const firebaseAuth = firebase.auth

const provider = new firebaseAuth.GoogleAuthProvider();

export function login () {
  return firebaseAuth().signInWithPopup(provider).then(function(result) {
  const token = result.credential.accessToken;
  const user = result.user;
}).catch(function(error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.email;
  const credential = error.credential;
});
}

export function logout () {
  return firebaseAuth().signOut()
}
