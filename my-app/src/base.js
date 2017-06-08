import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCp28yjPudU9Y1IN6vCIMIODhDGvHlK-v0',
  authDomain: 'mindful-reader.firebaseapp.com',
  databaseURL: 'https://mindful-reader.firebaseio.com',
  storageBucket: "mindful-reader.appspot.com"

})

const db = database(app)
const base = Rebase.createClass(db)

export default base
