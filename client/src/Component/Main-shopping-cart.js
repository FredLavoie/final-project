import React, { Component } from 'react';
import Row from './Shopping-cart-row'; 

export class MainShoppingCart extends Component {
    render() {
        let shoppingCart = this.props.shoppingCart
        const dataShopping = shoppingCart.map( item => 
        <Row shoppingcart={item}  key={item.id} entireshoppingcart={this.props.shoppingCart} deleteCartItem={this.props.deleteCartItem} removeOneCartItem={this.props.removeOneCartItem}/> ) 
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
      </table> 
            </main>

            
        )
    }
}
export default MainShoppingCart
