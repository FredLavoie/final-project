import React, { Component } from 'react';
import Nav from '../Component/Nav';
import MainShoppingCart from '../Component/Main-shopping-cart';

export class ShoppingCart extends Component {


  render() {
    window.addEventListener("DOMContentLoaded", () => {
      const button =  document.querySelector('.StripeCheckout span');
      const theFuckingButton = document.querySelector('.StripeCheckout');
      button.removeAttribute("style")
      theFuckingButton.removeAttribute('style')
      theFuckingButton.setAttribute('id', 'btn-checkout')
      button.setAttribute('class',"waves-effect waves-light btn")
    });
 
    return (
      <div>
        <Nav shoppingCart={this.props.shoppingcart}/> 
        <MainShoppingCart shoppingCart={this.props.shoppingcart}  deleteCartItem={this.props.deleteCartItem} removeOneCartItem={this.props.removeOneCartItem} addOneCartItem={this.props.addOneCartItem}/>
      </div>
    )
  }
}
  
export default ShoppingCart;