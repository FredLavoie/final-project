import React, { Component } from 'react';
import Row from './Shopping-cart-row'; 

export class MainShoppingCart extends Component {
    render() {
        let shoppingCart = this.props.shoppingCart
        const dataShopping = shoppingCart.map( item => 
    <Row shoppingcart={item}  key={item.id} entireshoppingcart={this.props.shoppingCart} deleteCartItem={this.props.deleteCartItem} removeOneCartItem={this.props.removeOneCartItem} addOneCartItem={this.props.addOneCartItem}/> ) 
    const totalPrice = shoppingCart.map(cart => (cart.current_price) * (cart.cart_quantity) );
    const decimalPrice = parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
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
                <th>total</th>
                <th></th>
                <th></th>
                <th></th>
                <th>total</th>
                <th>{decimalPrice}</th>
                
            </tr>
            </tbody>     
      </table> 

        <a class="waves-effect waves-light btn">Pay Now</a>
            </main>

            
    );
  }
}
export default MainShoppingCart;
