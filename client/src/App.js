import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Component
import Home from './pages/Home';
import Merchant_dashboard from './pages/Merchant_dashboard';
import Deals from './pages/Deals';
import Login from './pages/Login';
import Registration from './pages/Registration';

class App extends Component {

 state = {text:'hello ll'}
  

  componentDidMount() {
    M.AutoInit();

  }
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/deals" component={Deals} />
        <Route exact path="/merchants" component={Merchant_dashboard} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Registration} />
      </Router>
      </div>
    );
  }
}

export default App;
