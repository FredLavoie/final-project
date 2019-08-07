import React, { Component } from 'react';
import OrderViewRow from './OrderViewRow';

export class OrderView extends Component {
  render() {

    return (
      <main className="main-page" style={{margin: "auto", width: "85%"}}> 
        <h3>Order History</h3>
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Total</th>
              <th>Order Date</th>
              <th></th>
            </tr>
            </thead>
            <OrderViewRow />
        </table>                
      </main>          
    );
  }
}
export default OrderView;

