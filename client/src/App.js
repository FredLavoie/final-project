import React, { Component } from 'react';
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
import OrderCustomer from './pages/OrderCustomer';
import PrivateRoute from './PrivateRoute';
import UserLogin from './Component/User_login';
import Footer from './Component/Footer';

class App extends Component {
  state = {
    deals: [],
    readydom: false,
    location:null,
    shoppingcart: []
  }
  
  loginUser = (merchant_id) => {
    this.setState({merchant_id: merchant_id});
  }

  addTocart = (data) =>{
    this.setState({ shoppingcart: [...this.state.shoppingcart,data]}, () => {
      this.saveToLocal(); 
    });
  }

addTocart = (data) =>{
  const incomingData = data;
  const itemInCart = this.state.shoppingcart.find(item => item.id ===incomingData.id);
  if(itemInCart){
    const updateQuantity = this.state.shoppingcart.map(item => {
      if (item.id === incomingData.id) {
      incomingData.cart_quantity += 1;
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
      this.saveToLocal(); 
    })
  }
}

deleteCartItem = (id) => {
  if(true){
    const updateQuantity = this.state.shoppingcart.filter(item => {
      if (item.id !== id) {
        return item;
    }
  })
  // replacing the deals with updatedDeals in the state
  this.setState({shoppingcart: updateQuantity}, () => {
    this.saveToLocal(); 
  })
  }
}

removeOneCartItem = (data) => {
  const incomingData = data;
    if(true){
      const updateQuantity = this.state.shoppingcart.filter(item => {
        if (item === data & incomingData.cart_quantity >= 1) {
          incomingData.cart_quantity --;
        }
    return item;
    })
    // replacing the deals with updatedDeals in the state
    this.setState({shoppingcart: updateQuantity}, () => {
      this.saveToLocal(); 
    })}
    
  }

  addOneCartItem = (data) => {
    const incomingData = data;
    console.log('is the addOnecARTiTEM WOEKING?'); 
      if(true){
        const updateQuantity = this.state.shoppingcart.filter(item => {
          console.log('merchant quanity',item.cart_quantity);
          console.log('customer quantity', incomingData.cart_quantity)
          if (item === incomingData & item.quantity_available > incomingData.cart_quantity) {
            incomingData.cart_quantity += 1;
          }
      return item;
      })
      // replacing the deals with updatedDeals in the state
      this.setState({shoppingcart: updateQuantity}, () => {
        this.saveToLocal(); 
      })}
      
    }


saveToLocal() {
  const local = this.state.shoppingcart;
  localStorage.setItem('saveShoppingcart', JSON.stringify(local));

  // localStorage.setItem('saveShoppingcart',local);
}

getFromLocal(){  
  if(JSON.parse(localStorage.getItem('saveShoppingcart')) !== null){
    const shoppingItems = JSON.parse(localStorage.getItem('saveShoppingcart'));
    this.setState({ shoppingcart: shoppingItems}, () =>{ 
  })}
}

  componentDidMount() {
    this.getFromLocal();
    M.AutoInit();
    fetch('/api/deals')
      .then( res => res.json() )
      .then( data => {
        this.setState( { deals: data } );
    });

  setTimeout(() =>{
    this.setState({readydom: true});
  },2000);
  // Get location of user
  fetch('http://api.ipstack.com/check?access_key=25bd796cc69e12d0fcf745a091c60b86')
    .then(res => res.json())
    .then(data => console.log(data));
}

render() {
  return (
    <div className="App" style={{minHeight:'100vh', position:'relative', paddingBottom:100}}>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/merchants/dashboard" render={(props) => <MerchantDashboard {...props} isready={this.state.readydom} deals={this.state.merchant_deals}/>}/>  */}
        <PrivateRoute exact path="/merchants/dashboard" component={MerchantDashboard} isready={this.state.readydom} deals={this.state.merchant_deals} /> 
        <Route  path="/deals" render={() => <Deals isready={this.state.readydom} deals={this.state.deals} add={this.addTocart} />}  />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/users/login" component={UserLogin}/>
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/register" component={Merchant} />
        <PrivateRoute exact path="/update" component={Edit_deal} />
        <PrivateRoute exact path="/newdeal" component={NewDeal}  createNew={this.createNew}/> />
        <Route exact path="/shoppingcart" render={(props) => <ShoppingCart {...props} shoppingcart={this.state.shoppingcart} deleteCartItem={this.deleteCartItem} removeOneCartItem ={this.removeOneCartItem } addOneCartItem={this.addOneCartItem}/>}/> 
        <Route exact path="/order" render={() => <OrderCustomer/>}/> 
      </Switch>
      <Footer />
    </div>
  );
}
}
export default App;
