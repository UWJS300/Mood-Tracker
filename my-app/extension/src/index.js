import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import firebase from 'firebase'
import firebaseui from 'firebaseui'
import base from './base'

ReactDOM.render(
  <App />,
 document.getElementById('root')
)
registerServiceWorker();
