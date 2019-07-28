import React, { Component } from 'react';
var moment = require('moment');
import View from './Order_view';

export class ViewRow extends Component {
  state = {edit: false}


  componentDidMount() {

    // fetch(`/api/orders/business/${id}`, {
    //   headers: {"authorization": localStorage.getItem('token')}})
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   });
  }

  render() {
    console.log('PROPS IN ROW',this.props)

    let timeStamp = moment(this.props.deal.created_at).format('MMM Do, h:mm a');

    return (
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td>${this.props.deal.total}</td>
          <td>{timeStamp}</td>
          <td>
            <a className="waves-effect waves-light btn" onClick={() =>  this.state.edit ? this.setState({edit: false }) : this.setState({edit: true})}>View Order</a>
          </td>
        </tr>
        <tr>
          <td colSpan="100" className="animate pulse" style={{transition: 'all 1s'}}>
            { this.state.edit && <View/> }
          </td>
      </tr>
      </tbody>
    );
  }
}
export default ViewRow;
