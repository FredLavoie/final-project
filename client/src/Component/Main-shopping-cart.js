import React, { Component } from 'react';

export class MainShoppingCart extends Component {
    render() {
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
              <th></th>
          </tr>
        </thead>

      </table> 
            </main>

            
        )
    }
}
export default MainShoppingCart
