import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Component
import Home from './pages/Home';

class App extends Component {

 state = {text:'hello ll'}
  

  componentDidMount() {
    M.AutoInit();

  }
  render() {
    return (
      <div className="App">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/deals" component={Home} />
      </Router>
      </div>
    );
  }
}

export default App;
