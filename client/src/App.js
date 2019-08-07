import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage';
import MerchantDashboard from './pages/MerchantDashboard';
import DealsPage from './pages/DealsPage';
import LoginPage from './pages/LoginPage';
import Registration from './pages/Registration';
import MerchantRegisterPage from './pages/MerchantRegisterPage';
import NewDealPage from './pages/NewDealPage';
import EditDealPage from './pages/EditDealPage';
import ShoppingCart from './pages/Shopping_cart';
import OrderCustomer from './pages/OrderCustomer';
import PrivateRoute from './PrivateRoute';
import Footer from './Component/Footer';
import UserLoginPage from './pages/UserLoginPage';
import OrderViewPage from './pages/OrderViewPage';

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

  addTocart = (data) => {
    const incomingData = data;
    const itemInCart = this.state.shoppingcart.find(item => item.deal_id === incomingData.deal_id);
    
    if (itemInCart) {
      const updateQuantity = this.state.shoppingcart.map(item => {
        if (item.deal_id === incomingData.deal_id) {
          if (item.quantity_available > incomingData.cart_quantity) {
            incomingData.cart_quantity += 1;
          }
        }
        return item;
      });

      // replacing the deals with updatedDeals in the state
      this.setState({ shoppingcart: updateQuantity }, () => {
        this.saveToLocal();
        this.updateCounter(this.state.shoppingcart);
      });
    } else {
      // deal does not exist. Create a cart_quantity property
      incomingData.cart_quantity = +1;

      // Update the state with the new deal
      this.setState({ shoppingcart: [...this.state.shoppingcart, incomingData] }, () => {
        this.saveToLocal();
        this.updateCounter(this.state.shoppingcart);
      });
    }
  }

  deleteCartItem = (id) => {
    const updateQuantity = this.state.shoppingcart.filter(item => {
      if (item.deal_id !== id) {
        return item;
      }
    });
    // replacing the deals with updatedDeals in the state
    this.setState({ shoppingcart: updateQuantity }, () => {
      this.saveToLocal();
      this.updateCounter(this.state.shoppingcart);
    });
    
  }

  removeOneCartItem = (data) => {
    const incomingData = data;
    const updateQuantity = this.state.shoppingcart.filter(item => {
      if (item === data & incomingData.cart_quantity >= 1) {
        incomingData.cart_quantity--;
      }
      return item;
    });
    // replacing the deals with updatedDeals in the state
    this.setState({ shoppingcart: updateQuantity }, () => {
      this.saveToLocal();
      this.updateCounter(this.state.shoppingcart);
    });
    

  }

  addOneCartItem = (data) => {
    const incomingData = data;
    const updateQuantity = this.state.shoppingcart.filter(item => {
      if (item === incomingData & item.quantity_available > incomingData.cart_quantity) {
        incomingData.cart_quantity += 1;
      }
      return item;
    });
    // replacing the deals with updatedDeals in the state
    this.setState({ shoppingcart: updateQuantity }, () => {
      this.saveToLocal();
      this.updateCounter(this.state.shoppingcart);
    });
  }

  //update counter
  updateCounter = (items) => {
    let counter = 0;
    for (let item of items) {
      counter += item.cart_quantity;
    }
    this.setState({ counter: counter }, () => {
    });
  }

  saveToLocal() {
    const local = this.state.shoppingcart;
    localStorage.setItem('saveShoppingcart', JSON.stringify(local));
  }

  getFromLocal() {
    if (JSON.parse(localStorage.getItem('saveShoppingcart')) !== null) {
      const shoppingItems = JSON.parse(localStorage.getItem('saveShoppingcart'));
      this.setState({ shoppingcart: shoppingItems }, () => {
      });
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
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/merchants/dashboard" component={MerchantDashboard} isready={this.state.readydom} deals={this.state.merchant_deals} />
          <Route path="/deals" render={() => <DealsPage stateForMap={this.state} isready={this.state.readydom} deals={this.state.deals} add={this.addTocart} shoppingcart={this.state.shoppingcart} counter={this.state.counter} />} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/users/login" component={UserLoginPage} />
          <Route exact path="/view" render={() => <OrderViewPage/>} />
          <Route exact path="/signup" component={Registration} />
          <Route exact path="/register" component={MerchantRegisterPage} />
          <PrivateRoute exact path="/update" component={EditDealPage} />
          <PrivateRoute exact path="/newdeal" component={NewDealPage} createNew={this.createNew} /> />
          <Route exact path="/shoppingcart" render={(props) => <ShoppingCart {...props} shoppingcart={this.state.shoppingcart} deleteCartItem={this.deleteCartItem} removeOneCartItem={this.removeOneCartItem} addOneCartItem={this.addOneCartItem} />} />
          <Route exact path="/order" render={() => <OrderCustomer />} />
        </Switch>
        <Footer />
      </div>
     
    );
  }
}
export default App;
