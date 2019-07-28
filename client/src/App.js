import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import MerchantDashboard from './pages/MerchantDashboard';
import Deals from './pages/Deals';
import Login from './pages/Login';
import Registration from './pages/Registration';
import MerchantRegister from './pages/Merchant-register';
import NewDeal from './pages/New_deal';
import Edit_deal from './pages/Edit_deal';
import ShoppingCart from './pages/Shopping_cart';
import OrderCustomer from './pages/OrderCustomer';
import PrivateRoute from './PrivateRoute';
import Footer from './Component/Footer';
import UserLogin from './pages/User_Login';
import ViewOrders from './pages/Order_view';
import Map from './Component/Map';

class App extends Component {
  state = {
    deals: [],
    readydom: false,
    location: null,
    shoppingcart: [],
    counter: 0,
    userCity: '',
    loading: true
  }

  loginUser = (merchant_id) => {
    this.setState({ merchant_id: merchant_id });
  }

  // addTocart = (data) =>{
  //   console.log("Are you called?");
  //   this.setState({ shoppingcart: [...this.state.shoppingcart,data]}, () => {
  //     this.saveToLocal(); 
  //     console.log('Hello shopping cart!',this.state.shoppingcart)
  //     this.updateCounter(this.state.shoppingcart); 
  //   });
  // }

  addTocart = (data) => {
    const incomingData = data;
    const itemInCart = this.state.shoppingcart.find(item => item.deal_id === incomingData.deal_id);
    console.log(`Test add2cart`, incomingData, itemInCart)
    if (itemInCart) {
      const updateQuantity = this.state.shoppingcart.map(item => {
        if (item.deal_id === incomingData.deal_id) {
          if (item.quantity_available > incomingData.cart_quantity) {
            incomingData.cart_quantity += 1;
          }
        }
        return item;
      })

      // replacing the deals with updatedDeals in the state
      this.setState({ shoppingcart: updateQuantity }, () => {
        this.saveToLocal();
        this.updateCounter(this.state.shoppingcart);
      })
    } else {
      // deal does not exist. Create a cart_quantity property
      incomingData.cart_quantity = +1;

      // Update the state with the new deal
      this.setState({ shoppingcart: [...this.state.shoppingcart, incomingData] }, () => {
        this.saveToLocal();
        this.updateCounter(this.state.shoppingcart);
      })
    }
  }

  deleteCartItem = (id) => {
    if (true) {
      const updateQuantity = this.state.shoppingcart.filter(item => {
        if (item.deal_id !== id) {
          return item;
        }
      })
      // replacing the deals with updatedDeals in the state
      this.setState({ shoppingcart: updateQuantity }, () => {
        this.saveToLocal();
        this.updateCounter(this.state.shoppingcart);
      })
    }
  }

  removeOneCartItem = (data) => {
    const incomingData = data;
    if (true) {
      const updateQuantity = this.state.shoppingcart.filter(item => {
        if (item === data & incomingData.cart_quantity >= 1) {
          incomingData.cart_quantity--;
        }
        return item;
      })
      // replacing the deals with updatedDeals in the state
      this.setState({ shoppingcart: updateQuantity }, () => {
        this.saveToLocal();
        this.updateCounter(this.state.shoppingcart);
      })
    }

  }

  addOneCartItem = (data) => {
    const incomingData = data;
    if (true) {
      const updateQuantity = this.state.shoppingcart.filter(item => {
        console.log('merchant quanity', item.cart_quantity);
        console.log('customer quantity', incomingData.cart_quantity)
        if (item === incomingData & item.quantity_available > incomingData.cart_quantity) {
          incomingData.cart_quantity += 1;
        }
        return item;
      })
      // replacing the deals with updatedDeals in the state
      this.setState({ shoppingcart: updateQuantity }, () => {
        this.saveToLocal();
        this.updateCounter(this.state.shoppingcart);
      })
    }

  }

  //update counter
  updateCounter = (items) => {
    let counter = 0;
    for (let item of items) {
      counter += item.cart_quantity
    }
    this.setState({ counter: counter }, () => {
    })
  }

  saveToLocal() {
    const local = this.state.shoppingcart;
    localStorage.setItem('saveShoppingcart', JSON.stringify(local));

    // localStorage.setItem('saveShoppingcart',local);
  }

  getFromLocal() {
    if (JSON.parse(localStorage.getItem('saveShoppingcart')) !== null) {
      const shoppingItems = JSON.parse(localStorage.getItem('saveShoppingcart'));
      this.setState({ shoppingcart: shoppingItems }, () => {
      })
    }
  }

  componentDidMount() {
    this.getFromLocal();
    M.AutoInit();
    fetch('/api/deals')
      .then(res => res.json())
      .then(data => {
        this.setState({ deals: data });
      });

    setTimeout(() => {
      this.setState({ readydom: true });
    }, 1000);
  }

  render() {
    return (
      <div className="App" style={{ minHeight: "100vh", position: "relative", paddingBottom: "70px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/merchants/dashboard" render={(props) => <MerchantDashboard {...props} isready={this.state.readydom} deals={this.state.merchant_deals}/>}/>  */}
          <PrivateRoute exact path="/merchants/dashboard" component={MerchantDashboard} isready={this.state.readydom} deals={this.state.merchant_deals} />
          <Route path="/deals" render={() => <Deals stateForMap={this.state} isready={this.state.readydom} deals={this.state.deals} add={this.addTocart} shoppingcart={this.state.shoppingcart} counter={this.state.counter} />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/login" component={UserLogin} />
          <Route exact path="/view" render={() => <ViewOrders/>} />
          <Route exact path="/signup" component={Registration} />
          <Route exact path="/register" component={MerchantRegister} />
          <PrivateRoute exact path="/update" component={Edit_deal} />
          <PrivateRoute exact path="/newdeal" component={NewDeal} createNew={this.createNew} /> />
          <Route exact path="/shoppingcart" render={(props) => <ShoppingCart {...props} shoppingcart={this.state.shoppingcart} deleteCartItem={this.deleteCartItem} removeOneCartItem={this.removeOneCartItem} addOneCartItem={this.addOneCartItem} />} />
          <Route exact path="/order" render={() => <OrderCustomer />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;
