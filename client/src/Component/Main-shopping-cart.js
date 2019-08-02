import React, { Component } from 'react';
import Row from './Shopping-cart-row';
import TakeMoney from './Stripe';
import '../App.css';

export class MainShoppingCart extends Component {

  render() {
    let shoppingCart = this.props.shoppingCart
    const dataShopping = shoppingCart.map(item =>
      <Row shoppingcart={item} key={item.deal_id} entireshoppingcart={this.props.shoppingCart} deleteCartItem={this.props.deleteCartItem} removeOneCartItem={this.props.removeOneCartItem} addOneCartItem={this.props.addOneCartItem} />)

    const totalPrice = shoppingCart.map(cart => (cart.current_price) * (cart.cart_quantity));
    let price = 0;
    totalPrice.forEach(element => {
      price += element
    });

    const decimalPrice = parseFloat(Math.round(price * 100) / 100).toFixed(2);

    //calculate tax 
    const tax =parseFloat(Math.round((price*0.15) * 100) / 100).toFixed(2);

    //calcalate total price in decimal
    const decimalPriceTotal =  ((tax*100 + decimalPrice*100)/100).toFixed(2);

   

    return (
      <main className="main-page" style={{ margin: "auto", width: "85%" }}>
        <h5>Your Shopping Cart</h5>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Image</th>
              <th style={{ textAlign: "center" }}>Product</th>
              <th style={{ textAlign: "center" }}>Quantity </th>
              <th style={{ textAlign: "center" }}>Unit Price</th>
              <th style={{ textAlign: "center" }}>Price</th>
              <th></th>
            </tr>
          </thead>
          {dataShopping}
          
            <tr>
              <th style={{textAlign: "center"}}>Subtotal</th>
              <th></th>
              <th></th>
              <th></th>
              <th style={{textAlign: "center"}}>$ {decimalPrice}</th>
              <th></th>               
            </tr>
         
      
            <tr>
              <th style={{textAlign: "center"}}>Sale Tax</th>
              <th></th>
              <th></th>
              <th></th>
              <th style={{textAlign: "center"}}>$ {tax}</th>

              <th></th>             
            </tr>

       
            <tr>
              <th style={{textAlign: "center"}}>Total</th>
              <th></th> 
              <th></th>
              <th></th>
              <th style={{textAlign: "center"}}>$ {decimalPriceTotal}</th>
              <th></th>             
            </tr>
          
        </table>
        <div className="checkout-button">
        <TakeMoney  price={decimalPrice*100} priceDecimal={decimalPriceTotal}/> 
        </div>
        
      </main>
    );
  }
}

export default MainShoppingCart;
