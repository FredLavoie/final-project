import React, { Component } from 'react';
import Row from './Shopping-cart-row';
import TakeMoney from './Stripe';
import '../App.css';

export class MainShoppingCart extends Component {
  render() {
      let shoppingCart = this.props.shoppingCart
      const dataShopping = shoppingCart.map( item => 
  <Row shoppingcart={item}  key={item.id} entireshoppingcart={this.props.shoppingCart} deleteCartItem={this.props.deleteCartItem} removeOneCartItem={this.props.removeOneCartItem} addOneCartItem={this.props.addOneCartItem}/> ) 
  const totalPrice = shoppingCart.map(cart => (cart.current_price) * (cart.cart_quantity) );
  let price = 0; 
  totalPrice.forEach(element => {
    price += element
  });
  const decimalPrice = parseFloat(Math.round(price * 100) / 100).toFixed(2);
  
    return (
      <main className="main-page" style={{margin: "auto", width: "85%"}}> 
        <h5>Your Shopping Cart</h5>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity </th>
              <th>Price</th>
              <th>Subtotal</th> 
              <th></th> 
            </tr>
          </thead>
          {dataShopping}
          <tbody> 
            <tr>
              <th>Total</th>
              <th></th>
              <th></th>
              <th></th>
              <th>$ {decimalPrice}</th>
              <th></th>             
            </tr>
            </tbody>     
      </table> 

        <TakeMoney  price={decimalPrice*100}/> 
            </main>

            
    );
  }
}

export default MainShoppingCart;
