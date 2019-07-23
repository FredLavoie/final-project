import React, { Component } from 'react';
import localStorage from 'local-storage';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { withRouter } from "react-router"
// import Component
import Home from './pages/Home';
import MerchantDashboard from './pages/MerchantDashboard';
import Deals from './pages/Deals';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Merchant from './pages/Merchant';
import NewDeal from './pages/New_deal';
import Edit_deal from './pages/Edit_deal';
import ShoppingCart from './pages/Shopping_cart';

class App extends Component {
 state = {
   deals: [],
   readydom: false,
   location:null,
   shoppingcart: []
  }
  
  createNew = (event) => {
    event.preventDefault();
    console.log("Testing 1:",event.target.name.value)
    console.log("Testing 2:",event.target.description.value)
    fetch('/deals/new', {
      method: 'POST',
      headers:{ "Content-Type" : "application/json" },
      body: JSON.strintify({
        merchant_id: 100,
        name: event.target.name.value,
        description: event.target.description.value,
        quantity_available: event.target.quantity.value,
        image_path: event.target.photo.value,
        current_price: event.target.price.value
      })
    })
  }

  loginUser = (merchant_id) => {
    this.setState({merchant_id: merchant_id});
  }


  addTocart = (data) =>{
  //const shopping = [...this.state.shoppingcart,data]
  this.setState({ shoppingcart: [...this.state.shoppingcart,data]}, () => {
    console.log("cart",this.state.shoppingcart);
    this.saveToLocal(); 
  })
  }

  saveToLocal() {
    const local = this.state.shoppingcart;
    localStorage.set('saveShoppingcart', JSON.stringify(local));
  }

  getFromLocal(){
    const shoppingItems = JSON.parse(localStorage.get('saveShoppingcart'));
  console.log('what is my format', shoppingItems)
  this.setState({ shoppingcart: shoppingItems})
  }


  componentDidMount() {
    this.getFromLocal();
    M.AutoInit();
    fetch('/deals')
    .then( res => res.json() )
    .then( data => {
      this.setState( { deals: data } )
    })

    setTimeout(() =>{
      this.setState({readydom: true})
    },1000)
    // Get location of user
    fetch('http://api.ipstack.com/check?access_key=25bd796cc69e12d0fcf745a091c60b86')
    .then(res => res.json())
    .then(data => console.log(data));
  }

  

  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/merchants/:id/dashboard" render={(props) => <MerchantDashboard {...props} isready={this.state.readydom} deals={this.state.merchant_deals}/>}/> 
        <Route exact path="/deals" render={() => <Deals isready={this.state.readydom} deals={this.state.deals} add={this.addTocart} />}  />
        <Route exact path="/login" render={() => <Login loginUser={this.loginUser}/>}/>
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/register" component={Merchant} />
        <Route exact path="/update" component={Edit_deal} />
        <Route exact path="/newdeal" render={() => <NewDeal createNew={this.createNew}/>} />
        <Route exact path="/shoppingcart" render={(props) => <ShoppingCart {...props} shoppingcart={this.state.shoppingcart}/>}/> 
      </Router>
      </div>
    );
  }
}
export default App;
