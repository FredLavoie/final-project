import React, { Component } from 'react';
import Row from './Shopping-cart-row'; 
import TakeMoney from './Stripe'; 

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
    console.log('price',totalPrice);
        return (
            <main className="main-page"> 
                <p>Your Shopping Cart</p>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity </th>
              <th>Price</th>
              <th>Price*Quantity</th> 
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
                <th>total</th>
                <th>{decimalPrice}</th>
                
            </tr>
            </tbody>     
      </table> 

        <TakeMoney /> 
            </main>

            
    );
  }
}
export default MainShoppingCart;
