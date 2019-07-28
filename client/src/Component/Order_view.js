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
          <thead>
            <tr>
              <th></th>
              <th>Product???</th>
              <th></th>
              <th>Total</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {dataUserDeals}  
        </table>                
      </main>          
    );
  }
}
export default View;

