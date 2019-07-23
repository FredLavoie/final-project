import React, { Component } from 'react';
import localStorage from 'local-storage';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import PrivateRoute from './PrivateRoute';

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


addTocart = (data) =>{
  const incomingData = data;
  const itemInCart = this.state.shoppingcart.find(item => item.id ===incomingData.id);
  console.log('boolean in add', itemInCart); 
  if(itemInCart){
    const updateQuantity = this.state.shoppingcart.map(item => {
      if (item.id === incomingData.id) {
      incomingData.cart_quantity += 1;
      console.log('this is the item', item); 
      console.log('where I want to delete', this.state.shoppingcart.item)
    }
  return item;
  })

  // replacing the deals with updatedDeals in the state
  this.setState({shoppingcart: updateQuantity}, () => {
    this.saveToLocal(); 
  })}else{
    // deal does not exist. Create a cart_quantity property
    incomingData.cart_quantity = +1;

    // Update the state with the new deal
    this.setState({shoppingcart: [...this.state.shoppingcart, incomingData]}, () => {
      console.log('state when new',this.state.shoppingcart); 
      this.saveToLocal(); 
    })
  }
}

deleteCartItem = (id) => {
console.log('is the function being called?')
console.log('id receiving', id);
  // const itemInCart = this.state.shoppingcart.find(item => item.id === id);
  // console.log('boolean',itemInCart);
  if(true){
    const updateQuantity = this.state.shoppingcart.filter(item => {
      if (item.id !== id) {
        //delete item
        //var removed = myFish.splice(3, 1);//option 1
        //prevState.list.filter(x=> x != item);
        return item;
    }
  //return item;
  })
console.log('items after delete', updateQuantity)
  // replacing the deals with updatedDeals in the state
  this.setState({shoppingcart: updateQuantity}, () => {
    this.saveToLocal(); 
    console.log('State after delete', this.state.shoppingcart)
  })}
  
}

removeOneCartItem = (data) => {
  console.log('is the function being called?')
  console.log('id receiving', data);
  const incomingData = data;
    // const itemInCart = this.state.shoppingcart.find(item => item.id === id);
    // console.log('boolean',itemInCart);
    if(true){
      const updateQuantity = this.state.shoppingcart.filter(item => {
        if (item === data & incomingData.cart_quantity >= 1) {
          incomingData.cart_quantity --;
        }
    return item;
    })
  console.log('items after delete', updateQuantity)
    // replacing the deals with updatedDeals in the state
    this.setState({shoppingcart: updateQuantity}, () => {
      this.saveToLocal(); 
      console.log('State after delete', this.state.shoppingcart)
    })}
    
  }


saveToLocal() {
  const local = this.state.shoppingcart;
  localStorage.set('saveShoppingcart', JSON.stringify(local));
}

getFromLocal(){  
  if(JSON.parse(localStorage.get('saveShoppingcart')) !== null){
    const shoppingItems = JSON.parse(localStorage.get('saveShoppingcart'));
this.setState({ shoppingcart: shoppingItems}, () =>{ 
  })
  }
  
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
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/merchants/dashboard" render={(props) => <MerchantDashboard {...props} isready={this.state.readydom} deals={this.state.merchant_deals}/>}/>  */}
        <PrivateRoute exact path="/merchants/dashboard" component={MerchantDashboard} isready={this.state.readydom} deals={this.state.merchant_deals} />/> 
        <Route exact path="/deals" render={() => <Deals isready={this.state.readydom} deals={this.state.deals} add={this.addTocart} />}  />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/register" component={Merchant} />
        <PrivateRoute exact path="/update" component={Edit_deal} />
        <PrivateRoute exact path="/newdeal" component={NewDeal}  createNew={this.createNew}/> />
        <Route exact path="/shoppingcart" render={(props) => <ShoppingCart {...props} shoppingcart={this.state.shoppingcart} deleteCartItem={this.deleteCartItem} removeOneCartItem ={this.removeOneCartItem }/>}/> 
      </Switch>
      </div>
    );
  }
}
export default App;
