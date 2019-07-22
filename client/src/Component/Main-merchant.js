import React, { Component } from 'react';
import Row from './Merchant-deal-row';

export class Main extends Component {
  render() {
    let merchantDeals = this.props.deals     
    const datamerchantDeals = merchantDeals.map( deal => <Row deleteDeal={this.props.deleteDeal} updateDeal={this.props.updateDeal} key={deal.id} deal={deal} /> ) 
    return (
      <main className="main-page"> 
        <a className="waves-effect waves-light btn">Create New Deal</a>
        <p>Your Deals</p>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity </th>
              <th>Price</th>
              <th>Expiry Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {datamerchantDeals}  
        </table>                
      </main>          
    )
  }
}
export default Main

