import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

let firebaseConfig = {
  apiKey: "AIzaSyC0ImOqQegfS79xB0--SbvpAwtWHlYSOxY",
  authDomain: "finalprojectdeyu.firebaseapp.com",
  databaseURL: "https://finalprojectdeyu.firebaseio.com",
  projectId: "finalprojectdeyu",
  storageBucket: "finalprojectdeyu.appspot.com",
  messagingSenderId: "922292717492",
  appId: "1:922292717492:web:eda54e02510da350"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
