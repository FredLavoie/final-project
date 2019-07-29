import React, { Component } from 'react';
import ViewRow from './Order_view_row';

export class View extends Component {
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
            <ViewRow />
        </table>                
      </main>          
    );
  }
}
export default View;

