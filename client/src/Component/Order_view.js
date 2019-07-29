import React, { Component } from 'react';
import ViewRow from './Order_view_row';

export class View extends Component {
  render() {
    let userDeals = this.props.deals;    
    const dataUserDeals = userDeals.map( deal => <ViewRow  key={deal.id} deal={deal} /> ); 
    return (
      <main className="main-page" style={{margin: "auto", width: "85%"}}> 
        <h3>Order History</h3>
        <table>
            <tr>
              <th>Order Number</th>
              <th>Total</th>
              <th>Order Date</th>
            </tr>
          {dataUserDeals}  
        </table>                
      </main>          
    );
  }
}
export default View;

