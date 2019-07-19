import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Main from './Main'
import Footer from './Footer'
// import Component

import Header from './Header'


class App extends Component {

 state = {text:'hello ll'}
  

  componentDidMount() {
    M.AutoInit();

  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main/>

        <Footer />
      </div>
    );
  }
}

export default App;
