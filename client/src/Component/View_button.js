import React, { Component } from 'react'
import _ from 'lodash';

export class ViewButton extends Component {
  state = {
    deals: this.props.deals
  }
  render() {
    const merchantFilter = _(this.state.deals).groupBy(merchant => merchant.merchant_name).map((value, key) => {
      return {
        merchant_name: key, deals: value
      }
    }).value()

    const viewDeal = merchantFilter.map(deal => {

      const mapDansMap = deal.deals.map(dansmap => {
        return (
          <tbody>
              <td>
                <div className="image-container">
                  <img className="responsive" alt="" src={dansmap.image} />
                </div>
              </td>
              <td>{dansmap.product_name}</td>
              <td>${dansmap.deal_price} </td>
              <td>{dansmap.quantity}</td>
            </tbody>
        )
      })
      return (
        <td style={{ borderRight: '1px solid #d6d6d6' }}>
          <h5>{deal.merchant_name}</h5>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            {mapDansMap}
          </table>
        </td>
      )
    })


    return viewDeal;
  }
}

export default ViewButton
