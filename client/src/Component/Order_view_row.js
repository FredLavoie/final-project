import React, { Component } from 'react';
var moment = require('moment');
import ViewButton from './View_button';

export class ViewRow extends Component {
  state = {
    toggle: false,
    
  }

  getOrders = async (userId) => {
    const request = await fetch(`/api/orders/user/${userId}`, {
      headers: {"authorization": localStorage.getItem('token')}})
      if(request.ok){
      }

  }

  componentDidMount() {

    fetch(`/api/orders/`, {
      headers: {"authorization": localStorage.getItem('token')}})
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
  }

  render() {
    console.log('PROPS IN ROW',this.props)

    let timeStamp = moment(this.props.deal.created_at).format('MMM Do, h:mm a');

    return (
      <tbody>
        <tr>
          <td>XY652</td>
          <td>${this.props.deal.total}</td>
          <td>{timeStamp}</td>
            <a className="waves-effect waves-light btn" onClick={() =>  this.state.toggle ? this.setState({toggle: false }) : this.setState({toggle: true})}>View Order</a>
        </tr>
        <tr>
          <td className="animate pulse" style={{transition: 'all 1s'}}>
            { this.state.toggle ? <ViewButton/> : "" }
          </td>
      </tr>
      </tbody>
    );
  }
}
export default ViewRow;
