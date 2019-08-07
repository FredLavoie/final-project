import React, { Component } from 'react';
var moment = require('moment');
import ViewButton from './ViewButton';
import _ from 'lodash';


export class ViewRow extends Component {
  state = {
    toggle: false,
    message:"",
    data: [],
  }

  getOrders = async (userId) => {
    const request = await fetch(`/api/orders/user/${userId}`, {
      headers: {"authorization": localStorage.getItem('token')}});
    if(request.ok){
      let response = await request.json();
      this.setState({data: response});
    } else {
      let response = await request.json();
      this.setState({message: response.message});
    }
  }

  componentDidMount() {
    this.getOrders(localStorage.getItem('user_id'));
  }

  render() {

    let viewDeal = _(this.state.data).groupBy(dealview => dealview.order_number).map( (value, key)=> {
      return {
        order_number: key, deals: value
      };
    }).value();

    const handleToggleState = (index) => {
      if (!index.length) {
        this.state.toggle ? this.setState({toggle: false }) : this.setState({toggle:`button${index}`});
      }
      else {
        this.setState({toggle: false });
      }
    };

    const orderDeal = viewDeal.map((order, index) => {
      let timeStamp = moment(order.deals[0].created_at).format('MMM Do, h:mm a');
      return (
        <tr key={order.order_number}>
          <td>{order.order_number}</td>
            <td>${order.deals[0].total}</td>
            <td>{timeStamp}</td>
            <td>
              <a className="waves-effect waves-light btn" name={`button${index}`} onClick={() => handleToggleState(index)}>View Order</a>
            </td>
            { this.state.toggle === `button${index}` ? 
                (
                  <tr className="viewBox">          
                    <span style={{cursor:"pointer", position: "absolute", top: 0, left: 0 }} onClick={() => handleToggleState(index)} ><i className="material-icons">close</i></span>
                    <ViewButton deals={order.deals} />
                  </tr>
                )
             : "" }
        </tr>
      );
    });
    return orderDeal;
  }
}
export default ViewRow;

