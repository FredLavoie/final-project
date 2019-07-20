import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { BrowserRouter as Router, Route} from "react-router-dom";
// import Component
import Home from './pages/Home';
import Deals from './pages/Deals';

class App extends Component {

 state = {
   deals: [],
   readydom: false
  }
  

  componentDidMount() {
    M.AutoInit();
    fetch('/deals')
    .then(res => res.json())
    .then(data => {
      this.setState({deals: data})
    })
    setTimeout(() =>{
      this.setState({readydom: true})
    },1000)
    
  }
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/deals" render={() => <Deals isready={this.state.readydom} deals={this.state.deals}/>} />
      </Router>
      </div>
    );
  }
}

export default App;
