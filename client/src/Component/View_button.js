import React, { Component } from 'react'
import _ from 'lodash';


export class ViewButton extends Component {
  state = {
    deals: this.props.deals
  }
    render() {
      const merchantFilter =_(this.state.deals).groupBy(merchant => merchant.merchant_name).map( (value, key)=> {
        return {
          merchant_name: key, deals: value
        }
      }).value()

      const viewDeal = merchantFilter.map( deal => { 

        const mapDansMap = deal.deals.map(dansmap => {
          return (
            <div>
              <tbody>
                <td>
                  <div className="image-container">
                    <img className="responsive" alt="" src={dansmap.image}/>
                  </div>
                </td> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{dansmap.product_name}</td> 
                <td></td>
                <td></td>
                <td></td>
                <td>${dansmap.deal_price} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{dansmap.quantity}</td>
              </tbody>
            </div>
          )
        })
        return (
          <div>
          <h5>{deal.merchant_name}</h5>
          <thead>
              <tr>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th>Name</th> 
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th>Price</th> 
               <th></th>
               <th></th>
               <th></th>
               <th>Quantity</th> 
              </tr>
            </thead> 
          <div>{mapDansMap}</div>
          </div>
          )
      })
      return viewDeal 
    }
}

export default ViewButton
