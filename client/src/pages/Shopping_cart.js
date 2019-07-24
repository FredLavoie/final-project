import React, { Component } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import MainShoppingCart from '../Component/Main-shopping-cart';

export class ShoppingCart extends Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div>
        <Nav /> 
        <MainShoppingCart shoppingCart={this.props.shoppingcart}  deleteCartItem={this.props.deleteCartItem} removeOneCartItem={this.props.removeOneCartItem} addOneCartItem={this.props.addOneCartItem}/>
      </div>
    )
  }
}
  
export default ShoppingCart;