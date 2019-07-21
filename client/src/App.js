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
import Merchant from './pages/Merchant';
import NewDeal from './pages/New_deal';

class App extends Component {
 state = {
   deals: [],
   readydom: false
  }
  
  loginUser = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // const obj = {
    //   email,
    //   password
    // }

    fetch('/login', {
      method:'POST',
      headers:{ "Content-Type" : "application/json" },
      body: JSON.stringify({ email: "Julius_Kuhn34@yahoo.com",  password: "0JtAphtS4kVsD7z" })
   })
  }

  componentDidMount() {
    M.AutoInit();
    fetch('/deals')
    .then( res => res.json() )
    .then( data => {
      this.setState( { deals: data } )
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
        <Route exact path="/merchants/:id" component={Merchant_dashboard} /> 
        <Route exact path="/deals" render={() => <Deals isready={this.state.readydom} deals={this.state.deals}/>} />
        <Route exact path="/login" render={() => <Login userAuth={this.loginUser}/>}/>
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/register" component={Merchant} />
        <Route exact path="/newdeal" component={NewDeal} />
      </Router>
      </div>
    );
  }
}
export default App;
